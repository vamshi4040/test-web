<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

</head>
</head>
<body>
	<div class="navbar navbar-fixed">
		<div class="navbar-inner">
			<ul class="nav">
				<li ng-class="activeWhen(path()=='#/user')"><a href="#/user">User</a>
				</li>
			</ul>
			<ul class="nav pull-right">
				<li ng-class="pull-right"><a href="${pageContext.request.contextPath}/logout">Logout</a>
				</li>
			</ul>
		</div>
	</div>
</body>
</html>