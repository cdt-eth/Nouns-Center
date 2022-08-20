import { AddressFormAPIResponse, AddressFormResponseData, fetchFieldByString, fetchRawFormResponse } from "./addressform-data-fetching-utils";

export const PROJECT_FORM_ID = "9e6bc6c2-0f0d-4420-b66e-0d416a5fe73a";

/**
 * Fetch talent from data from AddressForm API
 */
export const fetchProjectFormData = async () => {
  return await Promise.all(postProcessProjectApiResponse(await fetchRawFormResponse(PROJECT_FORM_ID)));
};

async function checkImage(url){
    try {
  const res = await fetch(url);
  const buff = await res.blob();
 
  return buff.type.startsWith('image/')
    } catch (e){
      console.log(e);
      return false;
    }
}

const validateOrReplaceImageURL = async (imageUrl: string | undefined) => {
  if (imageUrl === undefined) {
    return "earth.gif";
  }

  const isValid = await checkImage(imageUrl);
  if (isValid) {
    return imageUrl;
  }

  return "earth.gif";

}

const postProcessProjectApiResponse = (rawProjectResponse: AddressFormAPIResponse) => {
    return rawProjectResponse.responses.map(async (data) => {
      const responseData = data.response_data;
      return {
        title: fetchFieldByString(responseData, "title"),
        descrtipion: fetchFieldByString(responseData, "description"),
        creator: fetchFieldByString(responseData, "Creator(s)"),
        url: fetchFieldByString(responseData, "link"),
        image: await validateOrReplaceImageURL(fetchFieldByString(responseData, "Thumbnail")),
        category: fetchFieldByString(responseData, "categories")
      }
    });
};