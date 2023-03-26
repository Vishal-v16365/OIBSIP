<?php
  
  $to = 'vishal16365@gmail.com'; //Receiver
  $subject = $_POST['subject'];
  $msg = $_POST['message'];
  $headers = "from: $_POST['email'] \n name: $_POST['name']";
  mail($to,$subject,$msg,$headers);
  echo "Message Sent Successfully";
?>
