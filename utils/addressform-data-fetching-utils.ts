const ADDRESS_FORM_API_KEY = "04c240ae-68d2-4226-b655-6bb09b6174a3";


const ADDRESS_FORM_API_BASE_URL = "https://stagef.api.addressform.io/ext-api/v1/form-responses?";


export interface AddressFormResponseData {
    prompt: string;
    response: string;
}

export interface AddressFormAPIResponse {
    responses: Array<{response_data: AddressFormResponseData[], metadata: string}>
}


export const fetchRawFormResponse = async (formId: string) => {

  const apiResponse = await fetch(
      `${ADDRESS_FORM_API_BASE_URL}api_key=${ADDRESS_FORM_API_KEY}&form_id=${formId}`
  );

  const rawTalentData = await apiResponse.json();

  return rawTalentData;
};

/**
 * Helper function to fetch specific fields from AddressForm API response
 * @param data Field level AddressForm API response
 * @param key  String you're trying to match in API response prompt 
 * @returns Matching API response field if one exists, else null
 */
 export const fetchFieldByString = (data: AddressFormResponseData[], key: string) => {
    const filtered = data.filter((element) => {
      return element.prompt.toLowerCase().includes(key.toLowerCase())
    });
  
    if (filtered.length > 0) {
      return filtered[0].response;
    }
    return null;
  };