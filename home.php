<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Submitted Details</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact Number</th>
            
        </tr>
        <tr>
            <td><?php echo $_POST['name']; ?></td>
            <td><?php echo $_POST['email']; ?></td>
            <td><?php echo $_POST['password']; ?></td>
            <td><?php echo $_POST['contact']; ?></td>
            
            
        </tr>
    </table>
</body>

</html>
