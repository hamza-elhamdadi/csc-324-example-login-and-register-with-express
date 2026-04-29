class App {
    constructor(){
        this.greeting = document.getElementById('greeting');

        this.getUserData();
    }
    
    async getUserData(){
        const response = await fetch('/user');
        const user = await response.json();

        this.greeting.textContent = `Welcome, ${user.firstName} ${user.lastName}!`
    }
}

export default App;