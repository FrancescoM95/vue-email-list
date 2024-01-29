const { createApp } = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = createApp({
    data: () => ({
        emails: [],
        allEmailsReceived: false,
    }),
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get(endpoint).then(res => {
                console.log(res.data.response)

                this.emails.push(res.data.response);

                if (this.emails.length === 10) {
                    this.allEmailsReceived = true;
                }
            })
        }
    }
});

app.mount('#root')