import { getEnedisData } from "../../services/enedisServices.js";

///TODO
export const fetchData = async (req, res) => {
  try {
    const data = await getEnedisData();
    console.log(data); // This line will print the fetched data to the console
    res.json(data);
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    res.status(500).send(`Server error: ${error.message}`);
  }
};
