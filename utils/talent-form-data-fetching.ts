import { AddressFormAPIResponse, AddressFormResponseData, fetchFieldByString, fetchRawFormResponse } from "./addressform-data-fetching-utils";

export const TALENT_FORM_ID = "5dd40741-aa26-49ae-88d4-ad4ed4c854af";

/**
 * Fetch talent from data from AddressForm API
 */
export const fetchTalentFormData = async () => {
  return postProcessTalentApiResponse(await fetchRawFormResponse(TALENT_FORM_ID));
};

const postProcessTalentApiResponse = (rawTalentData: AddressFormAPIResponse) => {
  return rawTalentData.responses.map((data) => {
    const responseData = data.response_data;
    const metadata = JSON.parse(data.metadata);
    return {
      name: fetchFieldByString(responseData, "name"),
      twitter: (fetchFieldByString(responseData, "twitter") ?? "").replace("@","").replace("https://twitter.com/",""), 
      discord: fetchFieldByString(responseData, "discord"),
      discordId: (metadata && metadata.user_id) ? metadata.user_id : "",
      title: [fetchFieldByString(responseData, "Vocation")],
      skills: fetchFieldByString(responseData, "skills")
    }
  });

};