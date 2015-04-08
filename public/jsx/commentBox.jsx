var CommentList = require('./commentList.js');
var CommentForm = require('./commentForm.js')

var CommentBox = React.createClass({
  loadComments: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        console.log('√', data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("<!>", this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        console.log('√', data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("<!>", this.props.url, status, err.toString());
      }.bind(this)
    });
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
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
React.render(
  <CommentBox url="http://localhost:9000/comments.json" />,
  document.getElementById('content')
);

module.exports = CommentBox;
