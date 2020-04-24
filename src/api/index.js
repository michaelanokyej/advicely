import Axios from "axios"

const url = "https://api.adviceslip.com/advice";

export const fetchRandomAdvice = async () => {
  try {
    const getAdvice = await Axios.get(url);
    return getAdvice;
  }
  catch(err) {
    console.log(err)
  }
}
