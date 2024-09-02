import constants from "../constants";

const fetchPdf = (videoLink) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${constants.apiUrl}/convert_in_pdf?youtube_url=${encodeURIComponent(
          videoLink
        )}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("API request failed");
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const ApiService = {
  fetchPdf,
};
