<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['emailaddress'];
$number= $_POST['PhoneNum'];
$emailSub= $_POST['EmailSubject'];
$message= $_POST['Messages'];
$to = "TheCodeCrafterz@gmail.com";
$subject = "You've Got Mail!";
$txt ="Name = ". $name . "\r\n  Email = " . $email  ."\r\n Mobile Number =" . $number . "\r\n Email Subject =" . $emailSub . "\r\n Message =" . $message;
$headers = "From: noreply@TheCodeCrafterz.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>