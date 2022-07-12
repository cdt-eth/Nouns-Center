export const TALENT_FORM_ID = "5dd40741-aa26-49ae-88d4-ad4ed4c854af";
const ADDRESS_FORM_API_KEY = "04c240ae-68d2-4226-b655-6bb09b6174a3";


const ADDRESS_FORM_API_BASE_URL = "https://stagef.api.addressform.io/ext-api/v1/form-responses?";


interface AddressFormResponseData {
    prompt: string;
    response: string;
}

interface AddressFormAPIResponse {
    responses: Array<{response_data: AddressFormResponseData[], metadata: string}>
}


/**
 * Fetch talent from data from AddressForm API
 */
export const fetchTalentFormData = async () => {

  const apiResponse = await fetch(
      `${ADDRESS_FORM_API_BASE_URL}api_key=${ADDRESS_FORM_API_KEY}&form_id=${TALENT_FORM_ID}`
  );

  const rawTalentData = await apiResponse.json();

  return postProcessTalentApiResponse(rawTalentData);
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

/**
 * Helper function to fetch specific fields from AddressForm API response
 * @param data Field level AddressForm API response
 * @param key  String you're trying to match in API response prompt 
 * @returns Matching API response field if one exists, else null
 */
const fetchFieldByString = (data: AddressFormResponseData[], key: string) => {
  const filtered = data.filter((element) => {
    return element.prompt.toLowerCase().includes(key.toLowerCase())
  });

  if (filtered.length > 0) {
    return filtered[0].response;
  }
  return null;
};
