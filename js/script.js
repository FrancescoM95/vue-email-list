const { createApp } = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = createApp({
    data: () => ({}),
    created() {
        axios.get(endpoint).then(res => {
            console.log(res.data.response)
        })
    }
});

app.mount('#root')