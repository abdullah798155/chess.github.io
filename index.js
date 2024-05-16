<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess Board Analyzer</title>
     <link rel="icon" type="image/png" href="./chessicon.png">
    <link rel="stylesheet" href="./index.css">
</head>
<body>
    <div id="container">
        <h1 id='header'>Chess Board Analyzer</h1>
        <div id="fen-input">
            <label for="fen">Enter FEN string:</label>
            <input  style="width:400px"type= "text" id="fen" name="fen" placeholder="Copy &  paste any Fen string  [From below]">
            <button onclick="submitFen()">Submit</button>
        </div>
        <a style="color:green;"  href="http://www.netreal.de/Forsyth-Edwards-Notation/index.php " target="_blank">MAKE YOUR OWN FEN HERE</a><br/><br/>
        <a href="https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation" target="_blank">What is FEN?</a>
        <div id="chessboard">Chess Board to be Parsed</div>
        <div id="statistics">Statistics</div>
        <div id="evaluation">Evaluation</div>
    </div>
    <div style="display:flex;align-items: center;justify-content: center;">
    <a href="https://www.buymeacoffee.com/abdullah79g
    " target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
    <script src="./index.js"></script>
    <div/>
</body>
</html>
