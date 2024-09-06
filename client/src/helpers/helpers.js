
export async function GetAPIToken() {
  let clientID = ""
  let secret = ""

  const response = await fetch("https://eu.oauth.battle.net/token", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(`${clientID}:${secret}`),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({grant_type: "client_credentials"})
  })

  const token = await response.json()
  console.log(token)
}