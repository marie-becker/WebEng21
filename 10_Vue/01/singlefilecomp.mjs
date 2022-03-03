export default {
    template: `
      <div><input type="text" @keyup="compute" v-model="message">
      <div>Letters: {{letters }}</div>
      <div>Spaces: {{spaces}}</div>
      <div>Words: {{words}}</div>
      </div>`,
    data(){
        return{
            letters: 0, spaces: 0, words:0
        }
    },
    methods: {
        compute() {
            this.spaces = this.message.split(' ').length - 1;
            this.letters = this.message.length - this.spaces;
            this.words = this.message.split(' ').length;
        }
    }
}