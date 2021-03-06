export const Urlencode = require('form-urlencoded');

export const POSTUrlencodeJSON = (url='/', params={}) => new Promise(async (resolve, reject) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: Urlencode(params)
    };
    const res = await fetch(url, options);
    const json = await res.json();
    resolve(json)
  } catch(e){
    reject(e)
  }
});


export const POSTRawJSON = (url='/', params={}) => new Promise(async (resolve, reject) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await fetch(url, options);
    const json = await res.json();
    resolve(json)
  } catch(e){
    reject(e)
  }
});

export const GETJSON = (url='/', query={}) => new Promise(async (resolve, reject) => {
  try {
    const res = await fetch(`${url}?${Urlencode(query)}`);
    const json = await res.json();
    resolve(json)
  } catch(e){
    reject(e)
  }
});

export const DELETEJSON = (url='/', query={}) => new Promise(async (resolve, reject) => {
  try {
    const res = await fetch(url, {
      method: 'DELETE'
    });
    resolve(await res.json())
  } catch(e){
    reject(e)
  }
});


export const PUTJSON = (url='/', query={}) =>  new Promise(async (resolve, reject) => {
  try {
    const res = await fetch(url, {
      method: "PUT",
      form: Urlencode(query)
    })
  } catch(e){
    reject(e)
  }
});


export const Mock = (mockData) => new Promise(async (resolve, reject) => {
  resolve(mockData)
});


