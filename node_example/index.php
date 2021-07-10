<?php 
$tbody = "
<html>
<head>
</head>
<body>
<center>

<span style='color:red;'>This customer needs a repair quote. Lets not keep him waiting!</span>
<div style='width:750px;text-align:center;'>


<div style='float:;'>
<span style='font-size:px;'><b>Personal Info</b><br></span>
<br>
<span style='font-size:px;'>---------------<br></span>
<br>";
if (empty($_POST["name"])) {
$tbody .= "
<span style='font-size:px;'><span style='font-size:px;color:red;'>Full Name: </span>$name<br></span>
<br>
";
}

if (empty($_POST["phone"])) {
$tbody .= "
<span style='font-size:px;'><span style='font-size:px;color:red;'>Phone Number:</span> $phone<br></span>
<br>";
}


if (empty($_POST["email"])) {
$tbody .=  "
<span style='font-size:px;'><span style='font-size:px;color:red;'>Email:</span> $email<br></span>
";
}

$tbody .= "</div>
<br>
<div style='float:;'>
<span style='font-size:px;'><b>Vehicle Info</b><br></span>
<br>
<span style='font-size:px;'>---------------<br></span>
<br>
<span style='font-size:px;'><span style='font-size:px;color:red;'>Vehicle make:</span> $make<br></span>
<br>
<span style='font-size:px;'><span style='font-size:px;color:red;'>Vehicle Model:</span> $model<br></span>
<br>
<span style='font-size:px;'><span style='font-size:px;color:red;'>Year:</span> $year<br></span>
<br>
<span style='font-size:px;'><span style='font-size:px;color:red;'>Vin:</span> $vin<br></span>

</div>
</div>
</center>
</body>
</html> 


";
$mail->Body = $tbody;
?>