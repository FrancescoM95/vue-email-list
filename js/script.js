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
                const email = res.data.response

                this.emails.push(email);

                if (this.emails.length === 10) {
                    this.allEmailsReceived = true;
                }
            })
        }
    }
});

app.mount('#root')