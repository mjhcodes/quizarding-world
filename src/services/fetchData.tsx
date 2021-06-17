import axios from "axios";
import { setFullData } from "../utils/dataUtil";

export async function fetchData(dispatch: any) {
  await axios
    .get(
      `https://my-json-server.typicode.com/mjhughes707/quizarding-world-api/db`
    )
    .then((res) => setFullData(dispatch, res.data))
    .catch((err) => console.log(err));
}
