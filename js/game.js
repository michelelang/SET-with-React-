
class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
        this.handleClick = this.handleClick.bind(this);
        // this.checkBox = this.checkBox.bind(this);
    }

    handleClick(event) {
        // checkBox();
        this.setState ({
            counter: this.state.counter + 1
                })
        console.log(counter);
    }

    

    // checkBox(event) {
    //     var inputBtn = document.getElementById('ifChecked');
    //     this.setState({isChecked: !this.state.isChecked})
    //     if (this.setState == true) ({
    //         counter: this.state.counter + 1
    //     })
    //     console.log("blah");
    // }

    render() {
        return(
       
            <div id={this.props.image} className={this.props.card} onClick={this.handleClick}>
                {this.props.children}
            </div>
        );
    }
}


class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        var tree = 
            <div>
                <br/>
                <Box image="one" card="box btn1"></Box>             
                <Box image="two" card="box btn2"></Box>
                <Box image="three" card="box btn3"></Box>      
                <Box image="four" card="box btn4"></Box>
                <br/>
                {/* <input type="checkbox" class="b btn1" id="ifChecked" onChange={this.checkBox}/>
                <input type="checkbox" class="b btn2" />
                <input type="checkbox" class="b btn3" />
                <input type="checkbox" class="b btn4" /> */}
                <br/>
                <Box image="five" src card="box btn5"></Box>             
                <Box image="six" card="box btn6"></Box>
                <Box image="seven" card="box btn7"></Box>      
                <Box image="eight" card="box btn8"></Box>
                <br/>
                {/* <input type="checkbox" class="b btn5"/>
                <input type="checkbox" class="b btn6"/>
                <input type="checkbox" class="b btn7"/>
                <input type="checkbox" class="b btn8"/> */}
                <br/>
                <Box image="nine" src card="box btn9"></Box>             
                <Box image="ten" card="box btn10"></Box>
                <Box image="eleven" card="box btn11"></Box>      
                <Box image="twelve" card="box btn12"></Box>
                <br/>
                {/* <input type="checkbox" class="b btn9"/>
                <input type="checkbox" class="b btn10"/>
                <input type="checkbox" class="b btn11"/>
                <input type="checkbox" class="b btn12"/> */}
            </div>
        return tree;
        }
    }

ReactDOM.render(
    <div class="header">SET Mania Game
        <App/>
    </div>,
    document.getElementById("root")
);