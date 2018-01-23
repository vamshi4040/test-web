<!DOCTYPE html>
<html lang="en" ng-app="angularspring">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<body>
	<%@ include file="header.jsp"%>
	<div class="row-fluid">
		<div class="span1">
			
		</div>
		<div class="span9">
			<div ui-view></div>
		</div>
	</div>
	<%@ include file="footer.jsp"%>
</body>
</html>