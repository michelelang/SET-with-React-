
class Box extends React.Component {
    constructor(){
        super();
        this.state = {
            gameBoard : [
                ' ', ' ', ' ', ' ',
                ' ', ' ', ' ', ' ',
                ' ', ' ', ' ', ' ',
            ],
            winner: null
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.checkBox = this.checkBox.bind(this);
    }

    // handleClick(event) {
        // checkBox();
    //     console.log("hello");
    // }

    // checkBox(event) {

    // }

    // componentWillMount() {
    //     this.setState (
    //         // cardOne = 
    //         {
    //             shape: "oval",
    //             color: "red",
    //             number: "2"
    //         },
    //         // cardTwo = 
    //         {
    //             shape: "oval",
    //             color: "red",
    //             number: "2"
    //         },
    //         // cardThree = 
    //         {
    //             shape: "oval",
    //             color: "red",
    //             number: "2"
    //         },
    //         // cardFour = 
    //         {
    //             shape: "oval",
    //             color: "red",
    //             number: "2"
    //         },
    //         // cardFive = 
    //         {
    //             shape: "oval",
    //             color: "red",
    //             number: "2"
    //         },
    //         // cardSix = 
    //         {
    //             shape: "oval",
    //             color: "red",
    //             number: "2"
    //         }

    //     )
    // }

    render() {
        return(
            <div className={this.props.card}>
                {this.state.gameBoard.map(function(value, indexArr){
                    <Card 
                    key={indexArr}
                    value={value}
                    />
                }
                )}
            </div>
        );
    }
}

const imageArr = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]


class App extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        var tree = 
            <div>
                <br/>
                <Box image="one" card="box btn1"></Box>             
                <Box image="two" card="box"></Box>
                <Box image="three" card="box"></Box>      
                <Box image="four" card="box"></Box>
                <br/>
                <input type="checkbox" class="btn1" />
                <input type="checkbox" class="btn" />
                <input type="checkbox" class="btn" />
                <input type="checkbox" class="btn" />
                <br/>
                <Box image="five" src card="box"></Box>             
                <Box image="six" card="box"></Box>
                <Box image="seven" card="box"></Box>      
                <Box image="eight" card="box"></Box>
                <br/>
                <input type="checkbox" class="btn"/>
                <input type="checkbox" class="btn"/>
                <input type="checkbox" class="btn"/>
                <input type="checkbox" class="btn"/>
                <br/>
                <Box image="nine" src card="box"></Box>             
                <Box image="ten" card="box"></Box>
                <Box image="eleven" card="box"></Box>      
                <Box image="twelve" card="box"></Box>
                <br/>
                <input type="checkbox" class="btn"/>
                <input type="checkbox" class="btn"/>
                <input type="checkbox" class="btn"/>
                <input type="checkbox" class="btn"/>
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