import axios from "axios";

// Call to grab RSS feed
export const makeCall = async () => {
  try {
    const resp = await axios.get(
      "https://pinecast.com/jsonfeed/end-of-the-reel"
    );

    return resp.data;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
