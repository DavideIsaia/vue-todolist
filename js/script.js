// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

Vue.config.devtools = true;
const app = new Vue (
    {
        el : '#root',
        data: {
            events: [
                {
                    text: "Chiamare il dottore",
                    done: true
                },
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Andare in palestra",
                    done: false
                },
                {
                    text: "Revisione auto",
                    done: true
                },
                {
                    text: "Pagare le bollette",
                    done: false
                }
            ],
            newEvent: ""            
        },
        methods: {
            // rimuove un elemento dalla lista
            removeElement(index) {
                this.events.splice (index, 1)
            },

            // compilando il form, aggiunge un elemento alla lista
            addElement() {                
                const newString = this.newEvent.trim();
                if (newString.length > 1) {
                    this.events.push({text:newString, done:false});
                    this.newEvent = "";
                }
            },

            // sbarra l'elemento se è stato fatto (done = true)
            toggle(index) {
                this.events[index].done = !this.events[index].done
            }
        }
    }
)