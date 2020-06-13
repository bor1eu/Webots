export default class webotsService{
    constructor(){
        this._apiBase = "https://webots.ru/";
    }

    postRequest = async(url, json)=>{
        const res = await fetch(`${this._apiBase}${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: json
        });
        if(!res.ok){
            throw new Error(`Could not fetch ${url}; recived ${res.status}`);
        }
        return await res.json();
    };

    onRegistration = async (name, email, password)=>{
        let user = {
            "lastname": "none",
            "firstname": name,
            "patronymic": "none",
            "email": email,
            "password": password
        };
        let url = "api/auth/registration";
        let json = JSON.stringify(user);
        /*const res = await this.postRequest("api/auth/registration", json);*/
        const res = await fetch(`${this._apiBase}${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: json
        });
        if(!res.ok){
            if(res.status==422){
                return("the specified email is already in use");
            }else{
                throw new Error(`Could not fetch ${url}; recived ${res.status}`);
            }
        }
        return await res;
    };

    onLogin = async (email, password)=>{
        let url = "api/auth/login";
        let userData = {
            "email":email,
            "password":password
        };
        let json = JSON.stringify(userData);
        const res = await fetch(`${this._apiBase}${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: json
        });
        if(!res.ok){
            if(res.status==403){
                return("not correct password");
            }else if (res.status==422){
                return("not correct email");
            }else{
                throw new Error(`Could not fetch ${url}; recived ${res.status}`);
            }
        }
        return await res.json();
    };

    getVK = async(url)=>{
        const res =await fetch(url);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}; recived ${res.status}`);
        }

        return await res;
    }
}
