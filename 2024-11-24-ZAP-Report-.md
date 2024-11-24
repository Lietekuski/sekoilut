<!DOCTYPE html>
<html>
<head>
<META http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>ZAP by Checkmarx Scanning Report</title>

<script src="2024-11-24-ZAP-Report-2/Chart.min.js" type="text/javascript"></script>
<script src="2024-11-24-ZAP-Report-2/main.js"
	type="text/javascript"></script>
<link rel="stylesheet" href="2024-11-24-ZAP-Report-2/Chart.min.css">
<!-- CSS only -->

<link rel="stylesheet" href="2024-11-24-ZAP-Report-2/main.css">
<link rel="stylesheet" href="2024-11-24-ZAP-Report-2/bootstrap.min.css">
<link rel="stylesheet" href="2024-11-24-ZAP-Report-2/normalize.css">

</head>
<body>
	<!-- Header material for report template -->
	<div class="container">
		<div class="row"></div>
		<div class="row">
			<div class="mx-auto" style="width: 50%;">
				
					<h1>
						<!-- The ZAP Logo -->
						<img src="2024-11-24-ZAP-Report-2/zap-by-checkmarx.png" alt="">
						<th>ZAP by Checkmarx Scanning Report</th>
					</h1>
				
			</div>
		</div>
		<div class="row"></div>
		<div class="row">
			<em
				class="text-right">Generated on Sun, 24 Nov 2024 22:04:47</em> <em
				class="text-right">ZAP Version: 2.15.0</em> <em> ZAP by <a
				href="https://checkmarx.com/">Checkmarx</a>
			</em>
		</div>
	</div>
	<p></p>

	<!-- Description, and first row of charts-->
	<div class="container ">
		



			<div class="row">
				<div class="col-md-2 col-lg-2 col-sm-3 col-xs-12">
					<div class="row">
						<p></p>
					</div>
					<div class="row border-bottom">
						<b>Most Severe Alert</b> <br>    
					</div>

				</div>


				
					<th>
						<div class="col-md-5 col-lg-5 col-sm-9 col-xs-12 piChartWrapper">
							<canvas class="styled_canvas" id="summaryChart" width="100%"
								height="100%"></canvas>
						</div>
					</th>
				

				<script type="text/javascript">
                    /*<![CDATA[*/
                    var title = "Vulnerability Severity";
                    var labels = [
                    "High",
                    "Medium",
                    "Low",
                    "Informational"];
                    var data = [
                    null,
                    null,
                    null,
                    null];
                    /*]]>*/

                    renderSummaryChart(title, labels, data);
                </script>

				


					

				

			</div>
		

	</div>
	<p></p>
	<div class="container left_right_borders">
		<div class="row">

			<div class="col-md-2 col-lg-3 col-sm-6 col-xs-12">
				<div class="row">
					<p></p>
				</div>
				<div class="row border-bottom">
					<b>Most Common Bug</b><br>
					<span id="common_bug"></span>
				</div>
				<div class="row"></div>
			</div>

			
				<div
					class="col-md-10 col-lg-9 col-sm-12 col-xs-12 horizontalBarChartWrapper">
					<canvas class="styled_canvas" id="summaryChartBugs" width="100%"
						height="50%"></canvas>
				</div>
			
			<script type="text/javascript">
                initializeSummaryBugsChartRender();
            </script>
			
			<script type="text/javascript">
                title = "Count of Vulnerability Occurrences";
                class_of_most_common_bug = ''
                if (most_common_bug_color === 'red')
                    new_class = 'risk-3'
                else if (most_common_bug_color === 'orange')
                    new_class = 'risk-2'
                else if (most_common_bug_color === 'yellow')
                    new_class = 'risk-1'
                else if (most_common_bug_color === 'blue')
                    new_class = 'risk-0'
                document.getElementById('common_bug').classList.add(new_class);
                renderSummaryBugsChart(title, all_labels, all_bugs_count,
                        all_colors);
            </script>
			<p></p>
		</div>
	</div>
	<p></p>

	<div class="container">

		
			<div class="row">

				<h3>Vulnerability Impact</h3>
				<table class="alerts table table-hover table-bordered table-striped">
					<caption>
						<div>Vulnerability Descriptions</div>
					</caption>
					<tr>
						<th width="5%" align="center" scope="col">#</th>
						<th width="20%" align="center" scope="col">Name</th>
						<th width="75%" align="center" scope="col">Impact</th>
					</tr>
					
						
					
				</table>
				<div class="spacer-lg"></div>
			</div>
		
	</div>

	<!-- JavaScript Bundle with Popper -->
	<script src="2024-11-24-ZAP-Report-2/bootstrap.bundle.min.js" type="text/javascript"></script>
	<script src="2024-11-24-ZAP-Report-2/main.js"
		type="text/javascript"></script>
</body>
</html>

