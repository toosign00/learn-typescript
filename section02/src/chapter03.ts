// object 
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "김아무개",
}

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY_API_KEY",
};

// config.apiKey = "hacked"; // 값을 변경할 수 없음