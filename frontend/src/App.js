import "./App.css";
import Web3 from "web3";
import Web3Token from "web3-token";
import axios from "axios";

function App() {
  const connect = async () => {
    // Connection to MetaMask wallet
    const web3 = new Web3(Web3.givenProvider);

    // getting address from which we will sign message
    const address = (await web3.eth.getAccounts())[0];

    // generating a token with 1 day of expiration time
    const token = await Web3Token.sign(
      (msg) => web3.eth.personal.sign(msg, address),
      "1d"
    );

    axios.post(
      "http://localhost:8000",
      { name: "Adam" },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  };

  return (
    <>
      <button onClick={connect}>Connect</button>
    </>
  );
}

export default App;
