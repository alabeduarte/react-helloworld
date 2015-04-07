var CommentBox = React.createClass({
  loadComments: function() {
    $.get(this.props.url, function(data) {
      console.log('√', data);
      this.setState({ data: data });
    }.bind(this));
  },
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    this.loadComments();
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});
React.render(
  <CommentBox url="http://localhost:9000/comments.json" />,
  document.getElementById('content')
);
