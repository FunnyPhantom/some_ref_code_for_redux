

export const getRandomNumber = () => {
    // hala api vaghei nadaraim shode oon vali age dashtim bedin soorat masalan mishod:
    // return axios.get('api/kooft/dard')
    // dalile inke return mikonim promise ro ine ke alaghe mandim ke ha haye dg i ke
    // getRandomNumber() dare seda mishe, afrad betoonan be natijash har moghe resolve shod dastresi dashte bashan.


    return new Promise((resolve, reject) =>{
        const rand = Math.random();
        if (rand < 0.5) {
            setTimeout(() => {
                resolve(Math.floor(Math.random()* 10))
            }, 1000)
        } else {
            setTimeout(() => {
                reject('api failed')
            }, 1000)
        }
    })
}
