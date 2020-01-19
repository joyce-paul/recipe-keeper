var React = require('react');

class Revisedrecipe extends React.Component {
    render() {
        return (
            <html>

      <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
          <title>🥗Recipe Edited!🥗</title>
          <meta charset="utf-8" />
      </head>


            <body>
                <div>
                        <h1 style={{color: 'green', width: "30%", textAlign: "center", margin: "80px auto 5px auto"}}>{this.props.message}</h1>
                        <h3>Recipe for: {this.props.recipe.title}</h3>
                        <p>Ingredients: {this.props.recipe.ingredients}</p>
                        <p>Instructions: {this.props.recipe.instructions}</p>
                </div>
            </body>
            </html>
            )
    };
};

module.exports = Revisedrecipe;