import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key:'42124cc792474bad8f7f802c80ff401f'
  }
})