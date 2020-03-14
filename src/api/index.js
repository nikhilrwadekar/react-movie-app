import axios from "axios";

/**
 * @param {String} endpoint The API Endpoint to Call
 * @param {String} queryString The variable name in your State the data needs to stored to
 */

const apiCall = async (endpoint, queryString) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&${queryString}`
  );

  return response.data;
};

export default apiCall;
