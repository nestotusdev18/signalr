var RadioInput = React.createClass( {
    handleClick: function() {
        this.props.onChoiceSelect( this.props.choice );
    },
    render: function() {
        var disable = this.props.disable;
        var classString = !disable ?  "radio" :  "radio disabled";
        return (
            <div className={classString}>
                <label className={this.props.classType}>
                    <input type="radio" name="optionsRadios" id={this.props.index} value={this.props.choice} onChange={this.handleClick}  />
                    {this.props.choice}
                </label>
            </div>
        );
    }
} );


var StreamContainer = React.createClass( {
    getInitialState: function() {
        return {           
            current_data: {  },
            user_choice: "",
			is_done: false           
        };
    },
	componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState( {           
            current_data: data,
            user_choice: "",
			is_done: false           
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
   },
    selectedAnswer: function( option ) {
        this.setState( { user_choice: option } );
    },
    handleSubmit: function() {           			

				var selectedChoice = this.state.user_choice;
				 var vhub = $.connection.votingHub;
				  $.connection.hub.start().done(function () {				
                    // Call the Send method on the hub.
                    vhub.server.send(this.state.current_data);
					console.log("send");
                    // Clear text box and reset focus for next comment.                   
				});
				this.setState({ is_done: true });
        },
    render: function() {
		
        var self = this;
		console.log(this.state.current_data);
		 var button_name = "Submit";
		 var allProfiles = Object.values(this.state.current_data).map((value) => {
			 return (
					<div className="row">
						 <div className="col-md-12">
							<div className="col-md-4">
								<div className="card">
									<div className="cardcontainer">
										<div className="row">
											<div className="col-md-12 cardpad">
												<div className="col-md-2 imgdiv" style={{background: '#30bea1'}}>
													<img src="content/images/boy-icon.png"/>
												</div>
												<div className="col-md-4">
													<br/>
													<h4>{value.FloorName}</h4>
													<h5>UNIQUE: {value.UniqueId}</h5>
												</div>
												<div className="col-md-2">
													<div className="">
													<h1 className="total" align="center">{value.CurrentCount}</h1>
													<h5 align="center">Current</h5>
												</div>
												</div>
												<div className="col-md-2">
													<div className="vl" align="center">
													<h1 align="center" className="green">05<sub>+2</sub></h1>
													<h5 align="center" className="long">Long Stay</h5>
												</div>	
												</div>
												<div className="col-md-2">
													 <div className="vl" align="center">
														<h1 className="wrong" align="center">01<sub>+2</sub></h1>
														<h5 align="center">Wrong Person</h5>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card">
									<div className="cardcontainer">
										<div className="row">
											<div className="col-md-12 cardpadgl">
													<div style={{margin : '0px 0px 0px -40px'}}>
														<div className="col-md-4" >
															<br/>
															<h4>{value.FloorName}</h4>
															<h5>UNIQUE: {value.UniqueId}</h5>
														</div>
														<div className="col-md-2" >
															<div className="">
															<h1 className="total" align="center">{value.CurrentCount}</h1>
															<h5 align="center">Current</h5>
														</div>
														</div>
														<div className="col-md-2">
															<div className="vl" align="center">
															<h1 align="center" className="green">05<sub>+2</sub></h1>
															<h5 align="center" className="long">Long Stay</h5>
														</div>	
														</div>
														<div className="col-md-2">
															 <div className="vl" align="center">
																<h1 className="wrong" align="center">01<sub>+2</sub></h1>
																<h5 align="center">Wrong Person</h5>
															</div>
														</div>
													</div>
													<div className="col-md-2 imgdiv" style={{background: '#30bea1'}}>
														<img src="content/images/girl-icon.png"/>
													</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			)
		 });
		 
		return(
				<div className="streamContainer">
					<button id="submit" className="btn btn-default" onClick={this.handleSubmit}>{button_name}</button>    
					{allProfiles}
				</div>
        );
    }
});

React.render(
    <StreamContainer url="/home/datacount" />,
    document.getElementById('container')
);