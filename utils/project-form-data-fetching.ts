import { AddressFormAPIResponse, AddressFormResponseData, fetchFieldByString, fetchRawFormResponse } from "./addressform-data-fetching-utils";

export const PROJECT_FORM_ID = "9e6bc6c2-0f0d-4420-b66e-0d416a5fe73a";

/**
 * Fetch talent from data from AddressForm API
 */
export const fetchProjectFormData = async () => {
  return postProcessProjectApiResponse(await fetchRawFormResponse(PROJECT_FORM_ID));
};

const validateOrReplaceImageURL = (imageUrl: string | undefined) => {
  return imageUrl === undefined ? "earth.gif" : imageUrl
}

const postProcessProjectApiResponse = (rawProjectResponse: AddressFormAPIResponse) => {
    return rawProjectResponse.responses.map((data) => {
      const responseData = data.response_data;
      return {
        title: fetchFieldByString(responseData, "title"),
        descrtipion: fetchFieldByString(responseData, "description"),
        creator: fetchFieldByString(responseData, "Creator(s)"),
        url: fetchFieldByString(responseData, "link"),
        image: validateOrReplaceImageURL(fetchFieldByString(responseData, "Thumbnail")),
        category: fetchFieldByString(responseData, "categories")
      }
    });
};