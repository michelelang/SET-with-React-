
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
    }
    render() {
        return(
            <div>
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