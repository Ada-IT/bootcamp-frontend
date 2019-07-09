import React, { Component } from 'react';

class Followers extends Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 1,
      loading: false,
      followers: []
    }
  }
  render() {
    // var items = this.state.followers.map(function(user) {
    //   return <div className="followers-list__item" key={user.id}><GithubUser user={user}/></div>;
    // });

    return (
        <div className="followers-page">
            {/* <h3>Followers of {this.props.params.username}</h3>
            <Infinite loadingSpinnerDelegate={<div className="loading"/>} isInfiniteLoading={this.state.loading} onInfiniteLoad={this.fetchData} infiniteLoadBeginEdgeOffset={this.state.done ? undefined : 100} elementHeight={41} useWindowAsScrollContainer>
                {items}
            </Infinite> */}
        </div>
    );
  }
}

export default Followers;
