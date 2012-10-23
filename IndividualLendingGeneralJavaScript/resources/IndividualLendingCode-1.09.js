crudData = {
		loanproduct: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 850,
				dialogHeight: 550
			},
		savingproduct: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 850,
				dialogHeight: 550
			},
		depositproduct: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 850,
				dialogHeight: 550
			},	
		office: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 400
			},
		fund: {
				editTemplateNeeded: false,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 275
			},
		employee: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 325
			},
		charge: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 600,
				dialogHeight: 450
			},
		user: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 1000,
				dialogHeight: 550
			},
		role: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 1000,
				dialogHeight: 550
			},
		orgCurrency: {
				editTemplateNeeded: false,
				refreshListNeeded: false,
				dialogWidth: 900,
				dialogHeight: 400
			},
		permission: {
				editTemplateNeeded: false,
				refreshListNeeded: false,
				dialogWidth: 900,
				dialogHeight: 400
			},
		officetransaction: {
				editTemplateNeeded: true,
				refreshListNeeded: true,
				dialogWidth: 900,
				dialogHeight: 400
			},
		datatable: {
				editTemplateNeeded: false,
				refreshListNeeded: true,
				dialogWidth: 900,
				dialogHeight: 300
			}

		};

saveSuccessFunctionReloadClient =  function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
		  					showILClient(currentClientId );
				  		};

saveSuccessFunctionReloadClientListing =  function(data, textStatus, jqXHR) {
	$("#dialog-form").dialog("close");
	showILClientListing();
};

formErrorFunction = function(jqXHR, textStatus, errorThrown) {
				    	handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
				};


generalErrorFunction = function(jqXHR, textStatus, errorThrown) {
alert("complete after  - for when an error is got but not on a create/update form");
				    	//handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
				};


function executeAjaxRequest(url, verbType, jsonData, successFunction, errorFunction) { 

	var jqxhr = $.ajax({ 
				url : baseApiUrl + url, 
				type : verbType, //POST, GET, PUT or DELETE 
				contentType : "application/json; charset=utf-8", 
				dataType : 'json', 
				data : jsonData, 
				cache : false, 
				beforeSend : function(xhr) { 
						if (tenantIdentifier > "") xhr.setRequestHeader("X-Mifos-Platform-TenantId", tenantIdentifier); 
						if (base64 > "") xhr.setRequestHeader("Authorization", "Basic " + base64); 
					}, 
				success : successFunction, 
				error : errorFunction 
			}); 
}

function executeAjaxOctetStreamDownloadRequest(url) { 
	 $.fileDownload(baseApiUrl + url +"?tenantIdentifier="+tenantIdentifier, {
        //preparingMessageHtml: "Please wait while your document is downloaded...",
        //failMessageHtml: "There was a problem downloading the document, please try again.",
        httpMethod: "GET"
    });
}

function executeMultipartUploadAjaxRequest(url, verbType, formData, successFunction, errorFunction) { 
	var jqxhr = $.ajax({ 
				url : baseApiUrl + url, 
				type : verbType, //POST, GET, PUT or DELETE 
				contentType : false, 
				processData: false,
				data : formData, 
				cache : false, 
				beforeSend : function(xhr) { 
						if (tenantIdentifier > "") xhr.setRequestHeader("X-Mifos-Platform-TenantId", tenantIdentifier); 
						if (base64 > "") xhr.setRequestHeader("Authorization", "Basic " + base64); 
					}, 
				success : successFunction, 
				error : errorFunction 
			}); 
}


// load html functions
function showMainContainer(containerDivName, username) {

	var htmlVar = '<div id="logowrapper">';
	htmlVar += '	<span style="float: left">';
	htmlVar += '		<img style="float:left; border: 0;" alt="" src="resources/mifos.jpg"/>';
	htmlVar += '	</span>';
	htmlVar += '</div>';
	htmlVar += '<div id="navwrapper">';
	htmlVar += '<ul id="nav" class="floatleft">';

	if (jQuery.MifosXUI.showIt("ClientSearch") == true)
		htmlVar += '	<li><a href="unknown.html" onclick="showILClientListing();return false;">' + doI18N("link.topnav.clients") + '</a></li>';

	if (jQuery.MifosXUI.showIt("GroupSearch") == true)
		htmlVar += '	<li><a href="unknown.html" onclick="showILGroupListing();return false;">' + doI18N("link.topnav.groups") + '</a></li>';

	htmlVar += '	<li><a href="unknown.html" onclick="setUserAdminContent(' + "'" + 'content' + "'" +');return false;">' + doI18N("link.topnav.users") + '</a></li>';

	htmlVar += '	<li><a href="unknown.html" onclick="setOrgAdminContent(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.organisation") + '</a></li>';
	
	htmlVar += '	<li><a href="unknown.html" onclick="setSysAdminContent(' + "'" + 'content' + "'" + ');return false;">' + doI18N("link.topnav.system") + '</a></li>';

	htmlVar += '	<li class="dmenu"><a href="unknown.html" onclick="return false;">' + doI18N("link.reports") + '</a>';
	htmlVar += '		<ul>';
	htmlVar += '			<li><a href="unknown.html" onclick="showILReporting();return false;">' + doI18N("link.reports.all") + '</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="showILReporting(' + "'" + 'Client' + "'" + ');return false;">' + doI18N("link.reports.client") + '</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="showILReporting(' + "'" + 'Loan' + "'" + ');return false;">' + doI18N("link.reports.loan") + '</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="showILReporting(' + "'" + 'Fund' + "'" + ');return false;">' + doI18N("link.reports.fund") + '</a></li>';
	htmlVar += '		</ul>';
	htmlVar += '	</li>';

	htmlVar += '	<li><a href="unknown.html" onclick="return false;">' + doI18N("label.tenant.name") + ': ' + tenantIdentifier + '</a></li>';
	htmlVar += '</ul>';
	htmlVar += '<ul id="nav" class="floatright">';
	htmlVar += '	<li class="dmenu"><a href="unknown.html" onclick="return false;">' + doI18N("link.topnav.culture") + '</a>';
	htmlVar += '		<ul>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowListing(' + "'" + 'en' + "'" + ');return false;">en</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowListing(' + "'" + 'fr' + "'" + ');return false;">fr</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowListing(' + "'" + 'es' + "'" + ');return false;">es</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowListing(' + "'" + 'pt' + "'" + ');return false;">pt</a></li>';
	htmlVar += '			<li><a href="unknown.html" onclick="setCultureReshowListing(' + "'" + 'zh' + "'" + ');return false;">zh</a></li>';
	htmlVar += '		</ul>';
	htmlVar += '	</li>';
	htmlVar += '	<li><a href="unknown.html" onclick="showILAccountSettings();return false;" class="dmenu"><div id=displayUN>' + currentUserName + '</div></a>';
	htmlVar += '		<ul>';
	htmlVar += '			<li><a href="unknown.html" onclick="showILAccountSettings();return false;">' + doI18N("link.topnav.account.settings") + '</a></li>';
	htmlVar += '		</ul>';
	htmlVar += '	</li>';
	htmlVar += '	<li><a href="unknown.html" onclick="signOut(' + "'" + containerDivName + "'" + ');return false;">' + doI18N("link.signout") + '</a></li>';
	htmlVar += '</ul>';
	htmlVar += '<br class="clear">';
	htmlVar += '</div><div style="float:none; clear:both;">';
	htmlVar += '	<div id="spacer" style="line-height: 15px;">&nbsp;</div>';
	htmlVar += '	<div id="content"></div>';
	htmlVar += '</div>';

	$("#" + containerDivName).html(htmlVar);
}


function showILLogon(logonDivName) {
	var htmlVar = '<div id=theLogonForm><img style="float:left; border: 0;" alt="" src="resources/mifos.jpg"/><div id=appTitle>' + doI18N("app.name") + ' - ' + doI18N("label.tenant.name") + ': ' + tenantIdentifier + '</div>';
	htmlVar += '<form name = "logonform"><table id=logonTable><tr><td>' + doI18N("login.username") + ':</td><td><input type="text" name="username"></td></tr>';
	htmlVar += '<tr><td>' + doI18N("login.password") + ': </td><td><input type="password" name="pwd"></td></tr>';
	htmlVar += '<tr><td><input type="button" value="Logon" name="Submit" ';
	htmlVar += 'onclick= "setBasicAuthKey(' + "'" + logonDivName + "'" + ', document.logonform.username.value, document.logonform.pwd.value )"></td><td></td></tr></table></form>';
	htmlVar += '<div id=formerrors></div></div>';

	$("#" + logonDivName).html(htmlVar);
}


function setClientListingContent(divName) {
	var htmlVar = '<button id="addclient" style="clear: both;">' + doI18N("link.add.new.client") + '</button>';
	htmlVar += '<div id="tabs"><ul><li><a href="#searchtab" title="searchtab">' + doI18N("tab.search") + '</a></li></ul><div id="searchtab"></div></div>';

	$("#" + divName).html(htmlVar);
}

function setGroupListingContent(divName){
	var htmlVar = '<button id="addgroup" style="clear: both;">' + doI18N("link.add.new.group") + '</button>';
	htmlVar += '<div id="tabs"><ul><li><a href="#searchtab" title="searchtab">' + doI18N("tab.search") + '</a></li></ul><div id="searchtab"></div></div>';

	$("#" + divName).html(htmlVar);
}

function setClientContent(divName) {

	var htmlVar = '<div id="newtabs">	<ul><li><a href="unknown.html"'; 
	htmlVar += ' title="clienttab" class="topleveltab"><span id="clienttabname">' + doI18N("app.loading") + '</span></a></li>';
	htmlVar += '<li><a href="nothing" title="clientidentifiertab" class="topleveltab"><span id="clientidentifiertabname">' + doI18N("client.identifier.tab.name")  + '</span></a></li>';
	htmlVar += '<li><a href="nothing" title="clientdocumenttab" class="topleveltab"><span id="clientdocumenttabname">' + doI18N("client.document.tab.name")  + '</span></a></li>';
	htmlVar += '<li><a href="nothing" title="clientriskanalysistab" class="topleveltab"><span id="clientriskanalysistabname">' + doI18N("client.riskanalysis.tab.name")  + '</span></a></li>';
	htmlVar += '</ul><div id="clienttab"></div><div id="clientidentifiertab"></div><div id="clientdocumenttab"></div><div id="clientriskanalysistab"></div></div>';
	$("#" + divName).html(htmlVar);
}

function setGroupContent(divName) {
	var htmlVar = '<div id="newtabs">	<ul><li><a href="unknown.html"'; 
	htmlVar += ' title="grouptab" class="topleveltab"><span id="grouptabname">' + doI18N("app.loading") + '</span></a></li></ul><div id="grouptab"></div></div>';
	
	$("#" + divName).html(htmlVar);
}

function setAddLoanContent(divName) {

	var htmlVar = '<div id="inputarea"></div><div id="schedulearea"></div>'
	$("#" + divName).html(htmlVar);
}

function setAddDepositContent(divName) {

	var htmlVar = '<div id="inputarea"></div><div id="schedulearea"></div>'
	$("#" + divName).html(htmlVar);
	}


function setOrgAdminContent(divName) {

	var addProductUrl = "maintainTable('loanproduct', 'loanproducts', 'POST');return false;";
	//var addSavingProductUrl="maintainTable('savingproduct', 'savingproducts', 'POST');return false;";
	var addDepositProductUrl="maintainTable('depositproduct', 'depositproducts', 'POST');return false;";
	var addOfficeUrl = "maintainTable('office', 'offices', 'POST');return false;";
	var addFundUrl = "maintainTable('fund', 'funds', 'POST');return false;";
	var addEmployeeUrl = "maintainTable('employee', 'staff', 'POST');return false;";
	var addChargeUrl = "maintainTable('charge', 'charges', 'POST');return false;";
	var orgCurrencyUrl = "maintainTable('orgCurrency', 'configurations/currency', 'PUT');return false;";
	var officeMoneyTransfer = "maintainTable('officetransaction', 'officetransactions', 'POST');return false;";

	var htmlVar = '<div id="inputarea"></div><div id="schedulearea"></div>'

	var htmlVar = '<div>';
	htmlVar += '<span style="float: left">';
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'loanproduct'" + ');return false;" id="viewloanproducts">' + doI18N("administration.link.view.loan.products") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="' + addProductUrl + '" id="addloanproduct">' + doI18N("administration.link.add.loan.product") + '</a>';
//	htmlVar += ' | ';
//  htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'savingproduct'" + ');return false;" id="viewsavingproducts">' + doI18N("administration.link.view.saving.products") + '</a>';
//	htmlVar += ' | ';
//	htmlVar += '	<a href="unknown.html" onclick="' + addSavingProductUrl + '" id="addsavingproduct">' + doI18N("administration.link.add.saving.product") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'depositproduct'" + ');return false;" id="viewdepositproducts">' + doI18N("administration.link.view.deposit.products") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="' + addDepositProductUrl + '" id="adddepositproduct">' + doI18N("administration.link.add.deposit.product") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'fund'" + ');return false;" id="viewfunds">' + doI18N("administration.link.view.funds") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="' + addFundUrl + '" id="addfund">' + doI18N("administration.link.add.fund") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'employee'" + ');return false;" id="viewemployees">' + doI18N("administration.link.view.employees") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="' + addEmployeeUrl + '" id="addemployee">' + doI18N("administration.link.add.employee") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'charge'" + ');return false;" id="viewcharges">' + doI18N("administration.link.view.charges") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="' + addChargeUrl + '" id="addcharge">' + doI18N("administration.link.add.charge") + '</a>';
	htmlVar += ' <br><br> ';
	htmlVar += '	<a href="unknown.html" onclick="' + orgCurrencyUrl + '" id="editconfiguration">' + doI18N("administration.link.currency.configuration") + '</a>';
	htmlVar += ' | ';	
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'office'" + ');return false;" id="viewoffices">' + doI18N("administration.link.view.offices") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="' + addOfficeUrl + '" id="addoffice">' + doI18N("administration.link.add.office") + '</a>';

	if (jQuery.MifosXUI.showIt("OfficeTransactionList") == true)
		htmlVar += ' | <a href="unknown.html" onclick="refreshTableView(' + "'officetransaction'" + ');return false;" id="viewofficetransactions">' + doI18N("administration.link.view.office.money.transfers") + '</a>';

	if (jQuery.MifosXUI.showIt("OfficeTransactionCreate") == true)
		htmlVar += ' | <a href="unknown.html" onclick="' + officeMoneyTransfer + '" id="internalTransfer">' + doI18N("administration.link.office.money.transfer") + '</a>';

	htmlVar += ' <br><br> ';
	htmlVar += '</span>';
	htmlVar += '</div>';
	htmlVar += '<div id="listplaceholder" ></div>';
	$("#" + divName).html(htmlVar);
}


function setUserAdminContent(divName) {

	var addUserUrl = "maintainTable('user', 'users', 'POST');return false;";
	var addRoleUrl = "maintainTable('role', 'roles', 'POST');return false;";
	var htmlVar = '<div id="inputarea"></div><div id="schedulearea"></div>'

	var htmlVar = '<div>';
	htmlVar += '<span style="float: left">';
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'user'" + ');return false;" id="listusers">' + doI18N("administration.link.view.users") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="' + addUserUrl + '" id="adduser">' + doI18N("administration.link.add.user") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'role'" + ');return false;" id="listroles">' + doI18N("administration.link.view.roles") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="' + addRoleUrl + '" id="addrole">' + doI18N("administration.link.add.role") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'permission'" + ');return false;" id="listpermissions">' + doI18N("administration.link.view.permissions") + '</a>';
	htmlVar += '</span>';
	htmlVar += '</div>';
	htmlVar += '<br><br>';
	htmlVar += '<div id="listplaceholder" ></div>';
	$("#" + divName).html(htmlVar);
}

function setSysAdminContent(divName) {

	var registerDatatableUrl = "maintainTable('datatable', 'datatables', 'POST');return false;";
	var htmlVar = '<div id="inputarea"></div><div id="schedulearea"></div>'

	var htmlVar = '<div>';
	htmlVar += '<span style="float: left">';
	htmlVar += '	<a href="unknown.html" onclick="refreshTableView(' + "'datatable'" + ');return false;" id="listusers">' + doI18N("administration.link.view.datatables") + '</a>';
	htmlVar += ' | ';
	htmlVar += '	<a href="unknown.html" onclick="' + registerDatatableUrl + '" id="registerdatatable">' + doI18N("administration.link.register.datatable") + '</a>';
	htmlVar += '</span>';
	htmlVar += '</div>';
	htmlVar += '<br><br>';
	htmlVar += '<div id="listplaceholder" ></div>';
	$("#" + divName).html(htmlVar);
}


function setReportingContent(divName) {

	var htmlVar = '<table id=toptable>';
 	htmlVar += '<tr>';
 	htmlVar += '  <td valign="top"><div id=myListOfReports></div></td>';
 	htmlVar += '  <td valign="bottom"><div id=myInputParameters></div></td>';
 	htmlVar += '  <td valign="top"><div id=myRunReportButton></div></td>';
 	htmlVar += '  <td valign="top"><div id=myClearReportButton></div></td>';
 	htmlVar += '  <td valign="bottom">';
 	htmlVar += '		<select id=decimalsChoice onChange="selectNewDecimals(options[selectedIndex].value)" >';
 	htmlVar += '		<option value="" selected="selected">' + doI18N("reporting.decimals") + '</option>';
 	htmlVar += '		<option value="4">4</option>';
 	htmlVar += '		<option value="3">3</option>';
 	htmlVar += '		<option value="2">2</option>';
 	htmlVar += '		<option value="1">1</option>';
 	htmlVar += '		<option value="0">0</option>';
 	htmlVar += '		<option value="-1">-1</option>';
 	htmlVar += '		<option value="-2">-2</option>';
 	htmlVar += '		<option value="-3">-3</option>';
 	htmlVar += '		</select>';
 	htmlVar += '   </td>';
 	htmlVar += '  <td valign="bottom">';
 	htmlVar += '		<select id=decimalsThousandsSep onChange="selectNewThousandsSep(options[selectedIndex].value)" >';
 	htmlVar += '		<option value="" selected="selected">' + doI18N("reporting.format") + '</option>';
 	htmlVar += '		<option value=",.">1,234,567.89</option>';
 	htmlVar += '		<option value=".,">1.234.567,89</option>';
 	htmlVar += '		<option value=" ,">1 234 567,89</option>';
 	htmlVar += '		<option value=" .">1 234 567.89</option>';
 	htmlVar += '		<option value=".' + "'" + '">1.234.567' + "'" + '89</option>';
 	htmlVar += '		<option value="' + "'" + ',">1'+ "'" + '234' + "'" + '567,89</option>';
 	htmlVar += '		<option value="INDIAN">Indian 12,34,567.89</option>';
 	htmlVar += '		<option value="NONE">None 1234567.89</option>';
 	htmlVar += '		</select>';
 	htmlVar += '   </td>';
 	htmlVar += ' </tr>';
 	htmlVar += '</table>';
 	htmlVar += '<div id=myOutput></div>'; 

	$("#" + divName).html(htmlVar);
}

function setAccountSettingsContent(divName) {

	var htmlVar = '<div id="tabs">';
	htmlVar += '	<ul>';
	htmlVar += '		<li><a href="#settingstab" title="settings">' + doI18N("tab.settings") + '</a></li>';
	htmlVar += '	</ul>';
	htmlVar += '	<div id="settings"></div>';
	htmlVar += '</div>';

	$("#" + divName).html(htmlVar);
}




//all the code for the various functions

function showILClientListing() {

	if (jQuery.MifosXUI.showIt("clientSearch") == false)
	{
		alert(doI18N("client.search.not.allowed"));
		return;
	}


setClientListingContent("content");

//HOME list clients functionality
	$("#tabs").tabs({
	    select: function(event, ui) {
	    	//console.log("selected..");
		//alert("selected");
	    },
	    load: function(event, ui) {
	    	//console.log("load..");
	    },
	    show: function(event, ui) {
	    	//console.log("show..");
		var initClientSearch =  function() {
			//render page markup
			var tableHtml = $("#clientSearchTabTemplate").render();
			$("#searchtab").html(tableHtml);
			
			//fetch all Offices 
			var officeSearchSuccessFunction =  function(data) {
				var officeSearchObject = new Object();
			    officeSearchObject.crudRows = data;
				var tableHtml = $("#officesDropdownTemplate").render(officeSearchObject);
				$("#officesInScopeDiv").html(tableHtml);

				// add client filter behaviour
				$("#officeId").change(function(){
					applyClientSearchFilter($(this).val());
				})
		  	};
		  	executeAjaxRequest('offices', 'GET', "", officeSearchSuccessFunction, formErrorFunction);
			
			//render client drop down data
			var clientSearchSuccessFunction =  function(data) {
				var clientSearchObject = new Object();
			    clientSearchObject.crudRows = data;
				var tableHtml = $("#allClientsDropdownTemplate").render(clientSearchObject);
				$("#clientsInScopeDiv").html(tableHtml);
		  	};
			executeAjaxRequest('clients', 'GET', "", clientSearchSuccessFunction, formErrorFunction);
  			    	
    		//search client functionality
			var searchSuccessFunction =  function(data) {
				var clientSearchObject = new Object();
			    clientSearchObject.crudRows = data;
				var tableHtml = $("#clientsTableTemplate").render(clientSearchObject);
				$("#clientTableDiv").html(tableHtml);
			    var oTable=displayListTable("clientstable");
		  	};
			
			//initialize search button				
			$("#searchClientBtn").button({
				icons: {
	                primary: "ui-icon-search"
	            }
	         }).click(function(e){
	         	//get selected office
	         	var officeHierarchy = $("#officeId").val();
	         	//get search parameter
				var searchValue = $("#clientSearchInput").val();
				searchValue = searchValue.replace("'", "''");
				//office hierarchy dropdown does not appear for branch users
				var sqlSearchValue = "display_name like '%" + searchValue + "%'"; 
				if(officeHierarchy){
					executeAjaxRequest("clients?sqlSearch=" + encodeURIComponent(sqlSearchValue)+ "&underHierarchy=" + encodeURIComponent(officeHierarchy), 'GET', "", searchSuccessFunction, formErrorFunction);
				}else{
					executeAjaxRequest("clients?sqlSearch=" + encodeURIComponent(sqlSearchValue), 'GET', "", searchSuccessFunction, formErrorFunction);
				}
			   	e.preventDefault(); 
		   	});
	    };
	  	  //initialize the client search tab
		 initClientSearch();
	 }
	 
	});
	

	var addClientSuccessFunction = function(data, textStatus, jqXHR) {
		  $('#dialog-form').dialog("close");
		  showILClient(data.entityId);
	}
	$("#addclient").button().click(function(e) {
		var getUrl = 'clients/template';
		var postUrl = 'clients';
		var templateSelector = "#clientFormTemplate";
		var width = 600; 
		var height = 350;
		
		popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.add.client', templateSelector, width, height, addClientSuccessFunction);
		
	    e.preventDefault();
	});
	
}	

//set scope for client search
function applyClientSearchFilter(officeHierarchy) {
	//re-render client drop down data
	var clientSearchSuccessFunction =  function(data) {
		var clientSearchObject = new Object();
	    clientSearchObject.crudRows = data;
		var tableHtml = $("#allClientsDropdownTemplate").render(clientSearchObject);
		$("#clientsInScopeDiv").html(tableHtml);
	};
	var sqlSearchValue = "o.hierarchy like '"+ officeHierarchy +"%'";
	executeAjaxRequest("clients?underHierarchy=" + encodeURIComponent(officeHierarchy), 'GET', "", clientSearchSuccessFunction, formErrorFunction);
}

//HOME list groups functionality
function showILGroupListing(){

	if (jQuery.MifosXUI.showIt("groupSearch") == false)
	{
		alert(doI18N("group.search.not.allowed"));
		return;
	}

	setGroupListingContent("content");

	$("#tabs").tabs({
	    select: function(event, ui) {
	    },
	    load: function(event, ui) {
	    },
	    show: function(event, ui) {
			var initGroupSearch =  function() {
				//render page markup
				var tableHtml = $("#groupSearchTabTemplate").render();
				$("#searchtab").html(tableHtml);
				
				//fetch all Offices 
				var officeSearchSuccessFunction =  function(data) {
					var officeSearchObject = new Object();
				    officeSearchObject.crudRows = data;
					var tableHtml = $("#officesDropdownTemplate").render(officeSearchObject);
					$("#officesInScopeDiv").html(tableHtml);

					// add group filter behaviour
					$("#officeId").change(function(){
						applyGroupSearchFilter($(this).val());
					})
			  	};
			  	executeAjaxRequest('offices', 'GET', "", officeSearchSuccessFunction, formErrorFunction);
				
				//render group drop down data
				var groupSearchSuccessFunction =  function(data) {
					var groupSearchObject = new Object();
				    groupSearchObject.crudRows = data;
					var tableHtml = $("#allGroupsDropdownTemplate").render(groupSearchObject);
					$("#groupsInScopeDiv").html(tableHtml);
			  	};
				executeAjaxRequest('groups', 'GET', "", groupSearchSuccessFunction, formErrorFunction);
	  			
	    		//search group functionality
				var searchSuccessFunction =  function(data) {
					var groupSearchObject = new Object();
				    groupSearchObject.crudRows = data;
					var tableHtml = $("#groupsTableTemplate").render(groupSearchObject);
					$("#groupTableDiv").html(tableHtml);
				    var oTable=displayListTable("groupstable");
			  	};
				
				//initialize search button				
				$("#searchGroupBtn").button({
					icons: {
		                primary: "ui-icon-search"
		            }
		         }).click(function(e){
		         	//get selected office
		         	var officeHierarchy = $("#officeId").val();
		         	//get search parameter
					var searchValue = $("#groupSearchInput").val();
					searchValue = searchValue.replace("'", "''");
					//office hierarchy dropdown does not appear for branch users
					var sqlSearchValue = "name like '%" + searchValue + "%'"; 
					if(officeHierarchy){
						executeAjaxRequest("groups?sqlSearch=" + encodeURIComponent(sqlSearchValue)+ "&underHierarchy=" + encodeURIComponent(officeHierarchy), 'GET', "", searchSuccessFunction, formErrorFunction);
					}else{
						executeAjaxRequest("groups?sqlSearch=" + encodeURIComponent(sqlSearchValue), 'GET', "", searchSuccessFunction, formErrorFunction);
					}
				   	e.preventDefault(); 
			   	});
	    	};

	    	initGroupSearch();
	    }
	});

	var addGroupSuccessFunction = function(data, textStatus, jqXHR) {
		$('#dialog-form').dialog("close");
		showILGroup(data.entityId);
	}
	$("#addgroup").button().click(function(e) {
		var getUrl = 'groups/template';
		var postUrl = 'groups';
		var templateSelector = "#groupFormTemplate";
		var width = 600; 
		var height = 450;
		
		popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.add.group', templateSelector, width, height, addGroupSuccessFunction);
		
	    e.preventDefault();
	});
}

//set scope for group search
function applyGroupSearchFilter(officeHierarchy) {
	//re-render group drop down data
	var groupSearchSuccessFunction =  function(data) {
		var groupSearchObject = new Object();
	    groupSearchObject.crudRows = data;
		var tableHtml = $("#allGroupsDropdownTemplate").render(groupSearchObject);
		$("#groupsInScopeDiv").html(tableHtml);
	};
	var sqlSearchValue = "o.hierarchy like '"+ officeHierarchy +"%'";
	executeAjaxRequest("groups?underHierarchy=" + encodeURIComponent(officeHierarchy), 'GET', "", groupSearchSuccessFunction, formErrorFunction);
}

function showILClient(clientId) {
	var clientUrl = 'clients/' + clientId

	setClientContent("content");
	$newtabs = $("#newtabs").tabs({
	    	select: function(event, tab) {
				//alert("client tab selected: " + tab.index);
				if (tab.index == 0)
				{
					if (clientDirty == true)
					{
						refreshLoanSummaryInfo(clientUrl);
						refreshNoteWidget(clientUrl);
						clientDirty = false;
					}
				}
				
				else if (tab.index == 1)
				{
					refreshClientIdentifiers(clientUrl);
				}
				else if (tab.index == 2){
					refreshClientDocuments(clientUrl);
				}
				else if (tab.index == 3){
					//temporarily hardcoded at tab 3 (jpw)
					refreshRiskAnalysis();
				}

	    		},
		"add": function( event, ui ) {
				$newtabs.tabs('select', '#' + ui.panel.id);
			}
	});
	var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
	        	handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
	            $(anchor.hash).html("error occured while ajax loading.");
	        };

	var successFunction = function(data, status, xhr) {
	        		currentClientId = clientId;
				clientDirty = false; //intended to refresh client if some data on its display has changed e.g. loan status or notes
	        		var currentTabIndex = $newtabs.tabs('option', 'selected');
	            	var currentTabAnchor = $newtabs.data('tabs').anchors[currentTabIndex];
	            
	        		var tableHtml = $("#clientDataTabTemplate").render(data);
					$("#clienttab").html(tableHtml);
					$("#clienttabname").html(data.displayName);
					
					// retrieve accounts summary info
					refreshLoanSummaryInfo(clientUrl);
					
					// bind click listeners to buttons.
					$('.deleteclientbtn').button().click(function(e) {
						var linkId = this.id;
						var clientId = linkId.replace("deleteclientbtn", "");

						var url = 'clients/' + clientId;
						var width = 400; 
						var height = 225;
												
						popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClientListing);
						e.preventDefault();
					});
					$('button.deleteclientbtn span').text(doI18N('dialog.button.delete.client'));
					
					$('.editclientbtn').button().click(function(e) {
						var linkId = this.id;
						var clientId = linkId.replace("editclientbtn", "");
						
						var getUrl = 'clients/' + clientId + '?template=true';
						var putUrl = 'clients/' + clientId;
						var templateSelector = "#clientFormTemplate";
						var width = 600; 
						var height = 350;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
						  	showILClient(clientId);
						}
						
						popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.edit.client", templateSelector, width, height,  saveSuccessFunction);
					    e.preventDefault();
					});
					$('button.editclientbtn span').text(doI18N('dialog.button.edit.client'));
					
					$('.newloanbtn').button().click(function(e) {
						var linkId = this.id;
						var clientId = linkId.replace("newloanbtn", "");
						addILLoan(clientId);
					    e.preventDefault();
					});
					$('button.newloanbtn span').text(doI18N('dialog.button.new.loan.application'));
					
					$('.newdepositbtn').button().click(function(e) {
						var linkId = this.id;
						var clientId = linkId.replace("newdepositbtn", "");
						
						addILDeposit(clientId);
						
						//launchAddDepositAccountDialog(clientId);
						
						e.preventDefault();
					});
					$('button.newdepositbtn span').text(doI18N('dialog.button.new.deposit.application'));	
					
					$('.addnotebtn').button().click(function(e) {
						var linkId = this.id;
						var clientId = linkId.replace("addnotebtn", "");
						var postUrl = 'clients/' + clientId + '/notes';
						var templateSelector = "#noteFormTemplate";
						var width = 600; 
						var height = 400;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
						  	refreshNoteWidget('clients/' + clientId);
						}
						
						popupDialogWithFormView("", postUrl, 'POST', "dialog.title.add.note", templateSelector, width, height,  saveSuccessFunction);
					    e.preventDefault();
					});
					$('button.addnotebtn span').text(doI18N('dialog.button.add.note'));

					refreshNoteWidget(clientUrl);

					showRelatedDataTableInfo($newtabs, "m_client", clientId, ["dummy excluded table1", "dummy excluded table2"]); 

					
					// retrieve additional info
					var additionalFieldsParams = {
							url: baseApiUrl,
							basicAuthKey: base64,
							tenantIdentifier: tenantIdentifier,
							datasetType: "m_client",
							datasetPKValue: data.id,
							datasetTypeDiv: "clientadditionaldata", 
							headingPrefix: "", 
							headingClass: "", 
							labelClass: "longrowlabel",
							valueClass:	"rowvalue",
							editLabel: doI18N("link.edit"),	
							saveLabel: doI18N("dialog.button.save"),	
							cancelLabel: doI18N("dialog.button.cancel")				
					};
					//will fully delete after (JPW) jQuery.stretchyData.displayAllExtraData(additionalFieldsParams);
	        };
	    
		executeAjaxRequest(clientUrl, 'GET', "", successFunction, errorFunction);	  

}

function refreshClientIdentifiers(clientUrl) {
		var successFunction =  function(data, textStatus, jqXHR) {
			var crudObject = new Object();
			crudObject.crudRows = data;
			var tableHtml = $("#clientIdentifiersTemplate").render(crudObject);
			$("#clientidentifiertab").html(tableHtml);
			//initialize all edit/delete buttons
				
			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshClientIdentifiers(clientUrl);
			}
			$.each(crudObject.crudRows, function(i, val) {
			      $("#editclientidentifier" + val.id).button({icons: {
	                primary: "ui-icon-pencil"}}
	                ).click(function(e){
			      	var clientId = clientUrl.replace("clients/", "");
					var getUrl = clientUrl + '/identifiers/'+val.id+'?template=true';
					var putUrl = clientUrl + '/identifiers/'+val.id;
					var templateSelector = "#clientIdentifiersFormTemplate";
					var width = 600; 
					var height = 450;
					popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.edit.group", templateSelector, width, height,  editClientIdentifierSuccessFunction);
				    e.preventDefault();
			      });
			      $("#deleteclientidentifier" + val.id).button({icons: {
	                primary: "ui-icon-circle-close"}
	            	}).click(function(e) {
					var url = clientUrl + '/identifiers/'+val.id;
					var width = 400; 
					var height = 225;
											
					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, editClientIdentifierSuccessFunction);
					
					e.preventDefault();
				});
			});			
			//associate event with add client Identity button
			$('#addclientidentifier').button({icons: {
	                primary: "ui-icon-plusthick"}
	            	}).click(function(e) {
				var clientId = clientUrl.replace("clients/", "");
				
				var getUrl = clientUrl + '/identifiers/template';
				var putUrl = clientUrl + '/identifiers';
				var templateSelector = "#clientIdentifiersFormTemplate";
				var width = 600; 
				var height = 450;
				
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	refreshClientIdentifiers(clientUrl);
				}
				
				popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.edit.group", templateSelector, width, height,  saveSuccessFunction);
			    e.preventDefault();
			});
		}
  		executeAjaxRequest(clientUrl + '/identifiers', 'GET', "", successFunction, formErrorFunction);	  	
}

function refreshClientDocuments(clientUrl) {
		var successFunction =  function(data, textStatus, jqXHR) {
			var crudObject = new Object();
			crudObject.crudRows = data;
			var tableHtml = $("#clientDocumentsTemplate").render(crudObject);
			$("#clientdocumenttab").html(tableHtml);
			//initialize all edit/delete buttons
				
			var editClientDocumentSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshClientDocuments(clientUrl);
			}
			$.each(crudObject.crudRows, function(i, val) {
			      $("#editclientdocument" + val.id).button({icons: {
	                primary: "ui-icon-pencil"}}
	                ).click(function(e){
			      	var clientId = clientUrl.replace("clients/", "");
					var getUrl = clientUrl + '/documents/'+val.id;
					var putUrl = clientUrl + '/documents/'+val.id;
					var templateSelector = "#editClientDocumentsFormTemplate";
					var width = 600; 
					var height = 450;
					popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.edit.group", templateSelector, width, height,  editClientDocumentSuccessFunction);
				    e.preventDefault();
			      });
			      $("#deleteclientdocument" + val.id).button({icons: {
	                primary: "ui-icon-circle-close"}
	            	}).click(function(e) {
					var url = clientUrl + '/documents/'+val.id;
					var width = 400; 
					var height = 225;
											
					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, editClientDocumentSuccessFunction);
					
					e.preventDefault();
				});
				$("#downloadclientdocument" + val.id).button({icons: {
	                primary: "ui-icon-arrowthickstop-1-s"}
	            	}).click(function(e) {
					var url = clientUrl + '/documents/'+val.id + '/attachment';
					executeAjaxOctetStreamDownloadRequest(url);
					e.preventDefault();
				});
			});			
			//associate event with add client document button
			$('#addclientdocument').button({icons: {
	                primary: "ui-icon-plusthick"}
	            	}).click(function(e) {
				var clientId = clientUrl.replace("clients/", "");
				
				var getUrl = "";
				var putUrl = clientUrl + '/documents';
				var templateSelector = "#clientDocumentsFormTemplate";
				var width = 600; 
				var height = 450;
				
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	refreshClientDocuments(clientUrl);
				}
				
				popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.edit.group", templateSelector, width, height,  saveSuccessFunction);
			    e.preventDefault();
			});
		}
  		executeAjaxRequest(clientUrl + '/documents', 'GET', "", successFunction, formErrorFunction);	  	
}
	

function refreshRiskAnalysis() {

alert("Work in Progress")
return
	var datatableUrl = 'datatables/risk_analysis/' + currentClientId;

	var successFunction =  function(data, textStatus, jqXHR) {
			var crudObject = new Object();
			crudObject.crudRow = data;
			var tableHtml = $("#clientRiskAnalysisTemplate").render(crudObject);
			$("#clientriskanalysistab").html(tableHtml);
			//initialize all edit/delete buttons
/*
			var editClientIdentifierSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	refreshClientIdentifiers(clientUrl);
			}
			$.each(crudObject.crudRows, function(i, val) {
			      $("#editclientidentifier" + val.id).button({icons: {
	                primary: "ui-icon-pencil"}}
	                ).click(function(e){
			      	var clientId = clientUrl.replace("clients/", "");
					var getUrl = clientUrl + '/identifiers/'+val.id+'?template=true';
					var putUrl = clientUrl + '/identifiers/'+val.id;
					var templateSelector = "#clientIdentifiersFormTemplate";
					var width = 600; 
					var height = 450;
					popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.edit.group", templateSelector, width, height,  editClientIdentifierSuccessFunction);
				    e.preventDefault();
			      });
			      $("#deleteclientidentifier" + val.id).button({icons: {
	                primary: "ui-icon-circle-close"}
	            	}).click(function(e) {
					var url = clientUrl + '/identifiers/'+val.id;
					var width = 400; 
					var height = 225;
											
					popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, editClientIdentifierSuccessFunction);
					
					e.preventDefault();
				});
			});			
			//associate event with add client Identity button
			$('#addclientidentifier').button({icons: {
	                primary: "ui-icon-plusthick"}
	            	}).click(function(e) {
				var clientId = clientUrl.replace("clients/", "");
				
				var getUrl = clientUrl + '/identifiers/template';
				var putUrl = clientUrl + '/identifiers';
				var templateSelector = "#clientIdentifiersFormTemplate";
				var width = 600; 
				var height = 450;
				
				var saveSuccessFunction = function(data, textStatus, jqXHR) {
				  	$("#dialog-form").dialog("close");
				  	refreshClientIdentifiers(clientUrl);
				}
				
				popupDialogWithFormView(getUrl, putUrl, 'POST', "dialog.title.edit.group", templateSelector, width, height,  saveSuccessFunction);
			    e.preventDefault();
			});
*/
		}

  		executeAjaxRequest(datatableUrl, 'GET', "", successFunction, formErrorFunction);	  
}




function showILGroup(groupId){
	var groupUrl = "groups/"+groupId;
	setGroupContent("content");

	$newtabs = $("#newtabs").tabs({
    	select: function(event, tab) {
			if (tab.index == 0){
				if (groupDirty == true){
					refreshGroupLoanSummaryInfo(groupUrl);
					groupDirty = false;
				}
			}
		},
		"add": function( event, ui ) {
				$newtabs.tabs('select', '#' + ui.panel.id);
			}
	});

	var successFunction = function(data, status, xhr) {
		var currentGroupId = groupId;
		var currentTabIndex = $newtabs.tabs('option', 'selected');
    	var currentTabAnchor = $newtabs.data('tabs').anchors[currentTabIndex];
		var tableHtml = $("#groupDataTabTemplate").render(data);
		groupDirty = false; //intended to refresh group if some data on its display has changed e.g. loan status or notes

		$("#grouptab").html(tableHtml);
		$("#grouptabname").html(data.name);

		refreshGroupLoanSummaryInfo(groupUrl);

		// bind click listeners to buttons.
		$('.deletegroupbtn').button().click(function(e) {
			var linkId = this.id;
			var groupId = linkId.replace("deletegroupbtn", "");

			var url = 'groups/' + groupId;
			var width = 400; 
			var height = 225;
									
			popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClientListing);
			
			e.preventDefault();
		});
		$('.editgroupbtn').button().click(function(e) {
			var linkId = this.id;
			var groupId = linkId.replace("editgroupbtn", "");
			
			var getUrl = 'groups/' + groupId + '?template=true';
			var putUrl = 'groups/' + groupId;
			var templateSelector = "#groupFormTemplate";
			var width = 600; 
			var height = 450;
			
			var saveSuccessFunction = function(data, textStatus, jqXHR) {
			  	$("#dialog-form").dialog("close");
			  	showILGroup(groupId);
			}
			
			popupDialogWithFormView(getUrl, putUrl, 'PUT', "dialog.title.edit.group", templateSelector, width, height,  saveSuccessFunction);
		    e.preventDefault();
		});
		$('.newloanbtn').button().click(function(e) {
			var linkId = this.id;
			var groupId = linkId.replace("newloanbtn", "");
			addILGroupLoan(groupId);
		    e.preventDefault();
		});
		$('button.newloanbtn span').text(doI18N('dialog.button.new.loan.application'));
	}

	var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
    	handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
        $(anchor.hash).html("error occured while ajax loading.");
    };

	executeAjaxRequest(groupUrl, 'GET', "", successFunction, errorFunction);
}

	// function to retrieve and display loan summary information in it placeholder
	function refreshLoanSummaryInfo(clientUrl) {
		var successFunction =  function(data, textStatus, jqXHR) {
				  			var tableHtml = $("#clientAccountSummariesTemplate").render(data);
				  			$("#clientaccountssummary").html(tableHtml);
			  			}
  		executeAjaxRequest(clientUrl + '/loans', 'GET', "", successFunction, formErrorFunction);	  	
	}
	
	// function to retrieve and display group loan summary information in it placeholder
	function refreshGroupLoanSummaryInfo(groupUrl) {
		var successFunction =  function(data, textStatus, jqXHR) {
				  			var tableHtml = $("#groupAccountSummariesTemplate").render(data);
				  			$("#groupaccountssummary").html(tableHtml);
			  			}
  		executeAjaxRequest(groupUrl + '/loans', 'GET', "", successFunction, formErrorFunction);	  	
	}

	function refreshNoteWidget(clientUrl) {
			  	
		eval(genRefreshNoteWidgetSuccessVar(clientUrl));
  		executeAjaxRequest(clientUrl + '/notes', 'GET', "", successFunction, formErrorFunction);	  
	}
	function genRefreshNoteWidgetSuccessVar(clientUrl) {

		return 'var successFunction = function(data, textStatus, jqXHR) {	' +
				  ' var noteParent = new Object();' + 
				  ' noteParent.title = doI18N("widget.notes.heading");' +
				  ' noteParent.notes = data;' +
				  ' var tableHtml = $("#noteListViewTemplate").render(noteParent);' +
				  ' $("#clienttabrightpane").html(tableHtml);' + 
				  ' $(".editclientnote").click(function(e) { ' +
						' var linkId = this.id;' +
						' var noteId = linkId.replace("editclientnotelink", "");' +
						' var getAndPutUrl = "' + clientUrl + '/notes/" + noteId;' +
						' var templateSelector = "#noteFormTemplate";' +
						' var width = 600;' +
						' var height = 400;' +
						' var saveSuccessFunction = function(data, textStatus, jqXHR) {' +
						  	' $("#dialog-form").dialog("close");' +
						  	' refreshNoteWidget("' + clientUrl + '");' +
						' };' +
						' popupDialogWithFormView(getAndPutUrl, getAndPutUrl, "PUT", "dialog.title.edit.note", templateSelector, width, height,  saveSuccessFunction);' +
					    ' e.preventDefault();' +
			      ' });' +
			  ' };'
	}
	
	function repopulateSavingAccountForm(clientId, productId){
		successFunction = function(data, textStatus, jqXHR) {
			var formHtml = $("#newDepositFormTemplate").render(data);
			
			$("#inputarea").html(formHtml);
			
			$('#productId').change(function() {
				var productId = $('#productId').val();
				repopulateSavingAccountForm(clientId, productId);
			});
			
			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: 'dd MM yy'});
			$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: 'dd MM yy'});
			
		$('#submitdepositapp').button().click(function(e) {
			submitDepositApplication(clientId);
		    e.preventDefault();
		});
		$('button#submitdepositapp span').text(doI18N('dialog.button.submit'));
		
		$('#canceldepositapp').button().click(function(e) {
  			showILClient(clientId);
		    e.preventDefault();
		});
		$('button#canceldepositapp span').text(doI18N('dialog.button.cancel'));
		}
		executeAjaxRequest('depositaccounts/template?clientId=' + clientId + '&productId=' + productId, 'GET', "", successFunction, formErrorFunction);
	}
	
	function modifyILLoan(loanId) {
		setAddLoanContent("content");
		
		var successFunction =  function(data, textStatus, jqXHR) {
			
			var clientId = data.clientId;
			
			var formHtml = $("#modifyLoanApplicationFormTemplate").render(data);
			
			$("#inputarea").html(formHtml);

			$('#productId').change(function() {
				var productId = $('#productId').val();
				// dont do anything for now when users switches product during modify
			});
			
			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: 'dd MM yy'});
			$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: 'dd MM yy'});
			
			$('#cancelloanapp').button().click(function(e) {
	  			showILClient(clientId);
			    e.preventDefault();
			});
			$('button#cancelloanapp span').text(doI18N('dialog.button.cancel'));
			
			calculateLoanSchedule();
			
			$('#modifyloanapp').button().click(function(e) {
				modifyLoanApplication(clientId, loanId);
			    e.preventDefault();
			});
			$('button#modifyloanapp span').text(doI18N('dialog.button.modify'));
			
			// attaching charges logic
			var index = 0;
			if (data["charges"]) {
				index = data["charges"].length;
			}
	  		$('#addloancharges').click(function() {  
  				var chargeId = $('#chargeOptions option:selected').val();
  				chargeId = chargeId.replace("-1", "");
  				
  				var addLoanChargeSuccess = function (chargeData) {
  					index++;
					chargeData["index"] = index;	  					
  					var loanChargeHtml = $("#addNewLoanChargeFormTemplate").render(chargeData);
  					
  					$("#selectedLoanCharges").append(loanChargeHtml);
			  		
  					$('.removeloancharges').click(function(e) {  
	  					$(this).closest('.row.charge').remove();
	  					calculateLoanSchedule();
	  					e.preventDefault();
	  				});
  					
  					$('.chargeAmount').change(function() {  
  			  			calculateLoanSchedule();
  			  		});
			  		
			  		calculateLoanSchedule();
  				}
  				
  				if (chargeId) {
  					executeAjaxRequest('charges/' + chargeId + '?template=true', 'GET', "", addLoanChargeSuccess, formErrorFunction);
  				}
  				
  				e.preventDefault();
	  		});
	  		
	  		$('.removeloancharges').click(function(e) {  
	  			$(this).closest('.row.charge').remove();
	  			calculateLoanSchedule();
	  			e.preventDefault();
	  		});
	  		
	  		$('.chargeAmount').change(function() {  
	  			calculateLoanSchedule();
	  		});
	  		
			// change detection
			$('#principal').change(function() {
				calculateLoanSchedule();
			});
			
			$('#loanTermFrequency').change(function() {
				calculateLoanSchedule();
			});
			$('#loanTermFrequencyType').change(function() {
				calculateLoanSchedule();
			});
			
			$('#numberOfRepayments').change(function() {
				calculateLoanSchedule();
			});
			$('#repaymentEvery').change(function() {
				calculateLoanSchedule();
			});
			$('#repaymentFrequencyType').change(function() {
				calculateLoanSchedule();
			});
			
			$('#expectedDisbursementDate').change(function() {
				calculateLoanSchedule();
			});
			$('#repaymentsStartingFromDate').change(function() {
				calculateLoanSchedule();
			});
			
			$('#interestRatePerPeriod').change(function() {
				calculateLoanSchedule();
			});
			$('#interestRateFrequencyType').change(function() {
				calculateLoanSchedule();
			});
			$('#amortizationType').change(function() {
				calculateLoanSchedule();
			});
			$('#interestType').change(function() {
				calculateLoanSchedule();
			});
			$('#interestCalculationPeriodType').change(function() {
				calculateLoanSchedule();
			});
			$('#interestChargedFromDate').change(function() {
				calculateLoanSchedule();
			});
		};
		
		executeAjaxRequest('loans/' + loanId + '?template=true&associations=charges', 'GET', "", successFunction, formErrorFunction);	 
	}
	
	function modifyLoanApplication(clientId, loanId) {
		
		var newFormData = JSON.stringify($('#entityform').serializeObject());
    	
		var successFunction =  function(data, textStatus, jqXHR) {
			showILClient(clientId);
		};
		
		executeAjaxRequest('loans/' + loanId , "PUT", newFormData, successFunction, formErrorFunction);	  
	}
	
	function addILLoan(clientId) {
		setAddLoanContent("content");

		eval(genAddLoanSuccessVar(clientId));

  		executeAjaxRequest('loans/template?clientId=' + clientId, 'GET', "", successFunction, formErrorFunction);	  
	}

	function addILGroupLoan(groupId) {
		setAddLoanContent("content");

		eval(genAddLoanSuccessVar(null, groupId));

		executeAjaxRequest('loans/template?groupId=' + groupId, 'GET', "", successFunction, formErrorFunction);		
	}
	
	function removeLoanCharge(loanId, loanChargeId){

		var successFunction = function(data, textStatus, jqXHR) {
			$("#dialog-form").dialog("close");
			loadILLoan(loanId);
		};

		popupConfirmationDialogAndPost('loans/' + loanId +'/charges/' + loanChargeId, 'DELETE', 'dialog.title.confirmation.required', 400, 225, 0, successFunction);

		return false;
	}

	function genAddLoanSuccessVar(clientId, groupId) {

		return 'var successFunction = function(data, textStatus, jqXHR) { ' +
				' var formHtml = $("#newLoanFormTemplateMin").render(data);' +
				' $("#inputarea").html(formHtml);' +
				' $("#productId").change(function() {' +
					' var productId = $("#productId").val();' +
					' repopulateFullForm(' + clientId + ', ' + groupId + ', productId);' +
				' });' +
			' };'
	}

	function genSaveSuccessFunctionReloadLoan(loanId) {

		return 'var saveSuccessFunctionReloadLoan = function(data, textStatus, jqXHR) { ' + 
						  	' $("#dialog-form").dialog("close");' +
							' loadILLoan(' + loanId + ');' +
							' clientDirty = true;' +
							' groupDirty = true;' +
						'};';
	}
	
	function genSaveSuccessFunctionReloadDeposit(depositAccountId) {

		return 'var saveSuccessFunctionReloadDeposit = function(data, textStatus, jqXHR) { ' + 
						  	' $("#dialog-form").dialog("close");' +
							' loadDepositAccount(' + depositAccountId + ');' +
							' clientDirty = true;' +
						'};';
	}

	function addILDeposit(clientId) {
		setAddDepositContent("content");

		eval(genAddDepositSuccessVar(clientId));

		   executeAjaxRequest('depositaccounts/template?clientId=' + clientId, 'GET', "", successFunction, formErrorFunction);	
		}	
		function genAddDepositSuccessVar(clientId) {

		return 'var successFunction = function(data, textStatus, jqXHR) { ' +
		' var formHtml = $("#newDepositFormTemplateMin").render(data);' +
		' $("#inputarea").html(formHtml);' +
		' $("#productId").change(function() {' +
		' var productId = $("#productId").val();' +
		' repopulateSavingAccountForm(' + clientId + ', productId);' +
		' });' +
		' };'
		}
		
	
	function repopulateSavingAccountForm(clientId, productId){
		successFunction = function(data, textStatus, jqXHR) {
			var formHtml = $("#newDepositFormTemplate").render(data);
			
			$("#inputarea").html(formHtml);
			
			$('#productId').change(function() {
				var productId = $('#productId').val();
				repopulateSavingAccountForm(clientId, productId);
			});
			
			$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: 'dd MM yy'});
			$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: 'dd MM yy'});
			
		$('#submitdepositapp').button().click(function(e) {
			submitDepositApplication(clientId);
		    e.preventDefault();
		});
		$('button#submitdepositapp span').text(doI18N('dialog.button.submit'));
		
		$('#canceldepositapp').button().click(function(e) {
  			showILClient(clientId);
		    e.preventDefault();
		});
		$('button#canceldepositapp span').text(doI18N('dialog.button.cancel'));
		}
		executeAjaxRequest('depositaccounts/template?clientId=' + clientId + '&productId=' + productId, 'GET', "", successFunction, formErrorFunction);
	}	


	function repopulateFullForm(clientId, groupId, productId) {
				
		successFunction =  function(data, textStatus, jqXHR) {
			
				var formHtml = $("#newLoanFormTemplate").render(data);
			
				$("#inputarea").html(formHtml);

				$('#productId').change(function() {
					var productId = $('#productId').val();
					repopulateFullForm(clientId, productId);
				});
				
				$('.datepickerfield').datepicker({constrainInput: true, defaultDate: 0, maxDate: 0, dateFormat: 'dd MM yy'});
				$('.datepickerfieldnoconstraint').datepicker({constrainInput: true, defaultDate: 0, dateFormat: 'dd MM yy'});
				
				calculateLoanSchedule();
				
				// attaching charges logic
		  		var index = data["charges"].length;
		  		$('#addloancharges').click(function(e) { 
		  			
	  				var chargeId = $('#chargeOptions option:selected').val();
	  				chargeId = chargeId.replace("-1", "");
	  				
	  				var addLoanChargeSuccess = function (chargeData) {
	  					index++;
						chargeData["index"] = index;	  					
	  					var loanChargeHtml = $("#addNewLoanChargeFormTemplate").render(chargeData);
	  					
	  					$("#selectedLoanCharges").append(loanChargeHtml);
				  		
	  					$('.removeloancharges').click(function(e) {  
		  					$(this).closest('.row.charge').remove();
		  					calculateLoanSchedule();
		  					e.preventDefault();
		  				});
	  					
	  					$('.chargeAmount').change(function() {  
	  			  			calculateLoanSchedule();
	  			  		});
				  		
				  		calculateLoanSchedule();
	  				}
	  				
	  				if (chargeId) {
	  					executeAjaxRequest('charges/' + chargeId + '?template=true', 'GET', "", addLoanChargeSuccess, formErrorFunction);
	  				}
	  				
	  				e.preventDefault();
		  		});
		  		
		  		$('.removeloancharges').click(function(e) {  
		  			$(this).closest('.row.charge').remove();
		  			calculateLoanSchedule();
		  			e.preventDefault();
		  		});
		  		
		  		$('.chargeAmount').change(function() {  
		  			calculateLoanSchedule();
		  		});
		  		
				// change detection
				$('#principal').change(function() {
					calculateLoanSchedule();
				});
				
				$('#loanTermFrequency').change(function() {
					calculateLoanSchedule();
				});
				$('#loanTermFrequencyType').change(function() {
					calculateLoanSchedule();
				});
				
				$('#numberOfRepayments').change(function() {
					calculateLoanSchedule();
				});
				$('#repaymentEvery').change(function() {
					calculateLoanSchedule();
				});
				$('#repaymentFrequencyType').change(function() {
					calculateLoanSchedule();
				});
				
				$('#expectedDisbursementDate').change(function() {
					calculateLoanSchedule();
				});
				$('#repaymentsStartingFromDate').change(function() {
					calculateLoanSchedule();
				});
				
				$('#interestRatePerPeriod').change(function() {
					calculateLoanSchedule();
				});
				
				$('#interestRateFrequencyType').change(function() {
					calculateLoanSchedule();
				});
				$('#amortizationType').change(function() {
					calculateLoanSchedule();
				});
				$('#interestType').change(function() {
					calculateLoanSchedule();
				});
				$('#interestCalculationPeriodType').change(function() {
					calculateLoanSchedule();
				});
				$('#interestChargedFromDate').change(function() {
					calculateLoanSchedule();
				});
				$('#submitloanapp').button().click(function(e) {
					submitLoanApplication(clientId, groupId);
				    e.preventDefault();
				});
				$('button#submitloanapp span').text(doI18N('dialog.button.submit'));
				
				$('#cancelloanapp').button().click(function(e) {
		  			if (clientId){
		  				showILClient(clientId);
		  			} else {
		  				showILGroup(groupId);
		  			}
				    e.preventDefault();
				});
				$('button#cancelloanapp span').text(doI18N('dialog.button.cancel'));
			};
		
		if (clientId){
			executeAjaxRequest('loans/template?clientId=' + clientId + '&productId=' + productId, 'GET', "", successFunction, formErrorFunction);	  
		} else {
			executeAjaxRequest('loans/template?groupId=' + groupId + '&productId=' + productId, 'GET', "", successFunction, formErrorFunction);	  
		}	  		
		

	}
	

	function calculateAnnualPercentageRate() {
		var periodInterestRate = parseFloat($('#nominalInterestRate').val());
		if (isNaN(periodInterestRate)) {
			periodInterestRate = 0;
		}
		
		var periodsInYear = 12;
		var periodType = $('#selectedInterestFrequencyOption').val();
		if (periodType == 3) {
			periodsInYear = 1;
		} else if (periodType == 2) {
			periodsInYear = 12;
		} else if (periodType == 1) {
			periodsInYear = 52;
		}
		
		var apr = parseFloat(periodsInYear * periodInterestRate);
        $('#interestRatePerYear').val(Globalize.format(apr, "n4"));
	}

	function calculateLoanSchedule() {
		
		var newFormData = JSON.stringify($('#entityform').serializeObject());
    	
		var successFunction = function(data, textStatus, jqXHR) {
				  		removeErrors("#formerrors");
				  		var loanScheduleHtml = $("#newLoanScheduleTemplate").render(data);
				  		$("#schedulearea").html(loanScheduleHtml);
		};
		
		var errorFunction = function(jqXHR, textStatus, errorThrown) {
						 $("#schedulearea").html("");
						 handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		};
		executeAjaxRequest('loans?command=calculateLoanSchedule', "POST", newFormData, successFunction, errorFunction);	  
	}


	function submitLoanApplication(clientId, groupId) {
		
		var newFormData = JSON.stringify($('#entityform').serializeObject());
    	
		var successFunction =  function(data, textStatus, jqXHR) {
			if (clientId){
				showILClient(clientId);
			} else {
				showILGroup(groupId);
			}
		};
		
		executeAjaxRequest('loans', "POST", newFormData, successFunction, formErrorFunction);	  

	}

	
	function submitDepositApplication(clientId) {
		
		var newFormData = JSON.stringify($('#entityform').serializeObject());
    	
		var successFunction =  function(data, textStatus, jqXHR) {
		  				showILClient(clientId);
			  };
		
		executeAjaxRequest('depositaccounts', "POST", newFormData, successFunction, formErrorFunction);	  

	}

	

	function showDepositAccount(accountId, productName) {
		var title = productName + ": #" + accountId ;			    
		$newtabs.tabs( "add", "unknown.html", title);
		loadDepositAccount(accountId);
	}
	
	function loadDepositAccount(accountId) {
		
		var accountUrl = 'depositaccounts/' + accountId + "?associations=all";

		var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
	    	handleXhrError(jqXHR, status, errorThrown, "#formErrorsTemplate", "#formerrors");
	        //$(anchor.hash).html("error occured while ajax loading.");
		};
		
		var successFunction = function(data, status, xhr) {
        	
    		var currentTabIndex = $newtabs.tabs('option', 'selected');
        	var currentTabAnchor = $newtabs.data('tabs').anchors[currentTabIndex];
        	
        	var tableHtml = $("#depositAccountDataTabTemplate").render(data);
        	
        	var data = new Object();
    		
    		var currentTab = $("#newtabs").children(".ui-tabs-panel").not(".ui-tabs-hide");
    		currentTab.html(tableHtml);

    		var curTabID = currentTab.prop("id");
    		
    		$('.rejectdepositapplication').button().click(function(e) {
				var linkId = this.id;
				var depositAccountId = linkId.replace("rejectbtn", "");
				var postUrl = 'depositaccounts/' + depositAccountId + '?command=reject';
				var getUrl = 'depositaccounts/' + depositAccountId + '?template=true';
				var templateSelector = "#stateTransitionDepositFormTemplate";
				var width = 400; 
				var height = 250;

				popupDialogWithFormView(getUrl,postUrl, 'POST', 'dialog.button.reject.depositAccount', templateSelector, width, height, saveSuccessFunctionReloadClient);
			    e.preventDefault();
			});
    		$('button.rejectdepositapplication span').text(doI18N('dialog.button.reject.depositAccount'));
    		
    		$('.approvedepositapplication').button().click(function(e) {
    			var linkId = this.id;
    			var depositAccountId = linkId.replace("approvebtn", "");
    			var postUrl = 'depositaccounts/' + depositAccountId + '?command=approve';
    			var templateSelector = "#stateTransitionDepositFormTemplateForApprove";
    			var width = 500; 
    			var height = 350;
    			var getUrl = 'depositaccounts/' + depositAccountId + '?template=true';
    			
    			eval(genSaveSuccessFunctionReloadDeposit(depositAccountId));
    			popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.approve.depositAccount', templateSelector, width, height, saveSuccessFunctionReloadDeposit);
    		    
    			e.preventDefault();
    		});
    		$('button.approvedepositapplication span').text(doI18N('dialog.title.approve.depositAccount'));
    		
    		$('.withdrawinterestamount').button().click(function(e) {
				var linkId = this.id;
				var depositAccountId = linkId.replace("withdrawinterestbtn", "");
				var postUrl = 'depositaccounts/' + depositAccountId + '?command=interestwithdraw';
				var getUrl = 'depositaccounts/' + depositAccountId + '?template=true';
				var templateSelector = "#withdrawInterestFormTemplate";
				var width = 400; 
				var height = 250;

				eval(genSaveSuccessFunctionReloadDeposit(depositAccountId));
				popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.withdraw.interest.amount', templateSelector, width, height, saveSuccessFunctionReloadDeposit);
				e.preventDefault();
			});
    		$('button.withdrawinterestamount span').text(doI18N('label.withdraw.interest.amount'));

    		
    		$('.renewdepositaccount').button().click(function(e) {
				var linkId = this.id;
				var depositAccountId = linkId.replace("renewbtn", "");
				var postUrl = 'depositaccounts/' + depositAccountId + '?command=renew';
				var getUrl = 'depositaccounts/' + depositAccountId + '?template=true';
				var templateSelector = "#renewDepositFormTemplate";
				var width = 850; 
				var height = 450;

				eval(genSaveSuccessFunctionReloadDeposit(depositAccountId));
				popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.renew.deposit.account', templateSelector, width, height, saveSuccessFunctionReloadClient);
				e.preventDefault();
			});
    		$('button.renewdepositaccount span').text(doI18N('label.renew.deposit.account'));
    		
    		$('.withdrawdepositamount').button().click(function(e) {
				var linkId = this.id;
				var depositAccountId = linkId.replace("withdrawbtn", "");
				var postUrl = 'depositaccounts/' + depositAccountId + '?command=withdrawal';
				var getUrl = 'depositaccounts/' + depositAccountId + '?template=true';
				var templateSelector = "#withdrawAmountFormTemplate";
				var width = 400; 
				var height = 280;

				eval(genSaveSuccessFunctionReloadDeposit(depositAccountId));
				popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.withdraw.deposit.amount', templateSelector, width, height, saveSuccessFunctionReloadDeposit);
			    
				e.preventDefault();
			});
    		$('button.withdrawdepositamount span').text(doI18N('label.withdraw.deposit.amount'));
 
			$('.modifydepositapplication').button().click(function(e) {
				var linkId = this.id;
				var depositAccountId = linkId.replace("modifydepositbtn", "");
				var postUrl = 'depositaccounts/' + depositAccountId;
				var getUrl = 'depositaccounts/' + depositAccountId + '?template=true';
				var templateSelector = "#modifyDepositApplicationFormTemplate";
				var width = 850; 
				var height = 450;

				eval(genSaveSuccessFunctionReloadDeposit(depositAccountId));
				popupDialogWithFormView(getUrl, postUrl, 'PUT', 'dialog.title.edit.deposit.account', templateSelector, width, height, saveSuccessFunctionReloadDeposit);
			    
				e.preventDefault();
			});
    		$('button.modifydepositapplication span').text(doI18N('label.modify.deposit.account'));
    		
    		$('.modifyapproveddepositapplication').button().click(function(e) {
				var linkId = this.id;
				var depositAccountId = linkId.replace("modifyapproveddepositbtn", "");
				var postUrl = 'depositaccounts/' + depositAccountId;
				var getUrl = 'depositaccounts/' + depositAccountId + '?template=true&?associations=all';
				var templateSelector = "#modifyApprovedDepositApplicationFormTemplate";
				var width = 400; 
				var height = 250;

				eval(genSaveSuccessFunctionReloadDeposit(depositAccountId));
				popupDialogWithFormView(getUrl, postUrl, 'PUT', 'dialog.title.edit.deposit.account', templateSelector, width, height, saveSuccessFunctionReloadDeposit);
			    
				e.preventDefault();
			});
    		$('button.modifyapproveddepositapplication span').text(doI18N('label.modify.deposit.account'));

    		
    		$('.undoapprovedepositapplication').button().click(function(e) {
				var linkId = this.id;
				var depositAccountId = linkId.replace("undoapprovebtn", "");
				var postUrl = 'depositaccounts/' + depositAccountId + '?command=undoapproval';
				var templateSelector = "#undoStateTransitionLoanFormTemplate";
				var width = 450; 
				var height = 260;

				eval(genSaveSuccessFunctionReloadDeposit(depositAccountId));
				popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.undo.deposit.approval', templateSelector, width, height, saveSuccessFunctionReloadDeposit);
			    
				e.preventDefault();
			});
    		$('button.undoapprovedepositapplication span').text(doI18N('label.undo.approval'));
    		
    		$('.withdrawnbyapplicant').button().click(function(e) {
				var linkId = this.id;
				var depositAccountId = linkId.replace("withdrawnbyapplicantbtn", "");
				var getUrl = 'depositaccounts/' + depositAccountId + '?template=true';
				var postUrl = 'depositaccounts/' + depositAccountId + '?command=withdrewbyclient';
				var templateSelector = "#stateTransitionDepositFormTemplate";
				var width = 400; 
				var height = 250;

				popupDialogWithFormView(getUrl,postUrl, 'POST', 'dialog.title.loan.withdrawn.by.client', templateSelector, width, height, saveSuccessFunctionReloadClient);
			    e.preventDefault();
			});
    		$('button.withdrawnbyapplicant span').text(doI18N('dialog.title.loan.withdrawn.by.client'));
    		
    		$('.deletedepositapplication').button().click(function(e) {
				var linkId = this.id;
				var depositAccountId = linkId.replace("deletebtn", "");
				var url = 'depositaccounts/' + depositAccountId;
				var width = 400; 
				var height = 225;
										
				popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClient);
			    e.preventDefault();
		});
		$('button.deletedepositapplication span').text(doI18N('dialog.button.delete.loan'));
		};
		
		executeAjaxRequest(accountUrl, 'GET', "", successFunction, errorFunction);	
	}
	

function showRelatedDataTableInfo(tabVar, appTableName, appTablePKValue, ignoreDatatableArray) {	 
  
		var url = 'datatables?apptable=' + appTableName;

		var successFunction =  function(data, textStatus, jqXHR) {
				
				if (data.length > 0)
				{
					var datatablesDiv = appTableName + "_" + appTablePKValue + "_addData";
					tabVar.tabs( "add", "#" + datatablesDiv , doI18N("Additional.Data"));
					tabVar.tabs('select', 0); //back to main tab

					var additionalInfoParams = {
						baseApiUrl : baseApiUrl,
						base64: base64,
						tenantIdentifier: tenantIdentifier,
						appTableName: appTableName,
						appTablePKValue: appTablePKValue, 
						ignoreDatatableArray: ignoreDatatableArray,
						globaliseFunctions: helperFunctions,
						resValue: "resources/libs/",

						datatablesDiv: datatablesDiv,
						labelClass: "datatableLabel ",
						valueClass:	"",
						saveLabel: doI18N("dialog.button.save"),	
						cancelLabel: doI18N("dialog.button.cancel")				
					};
					jQuery.stretchyDataTables.displayAdditionalInfo(additionalInfoParams);

				}
			  };

		executeAjaxRequest(url, 'GET', "", successFunction, generalErrorFunction);	
}


function showILLoan(loanId, product) {
	var title = product + ": #" + loanId ;			    
	$newtabs.tabs( "add", "unknown.html", title);
	loadILLoan(loanId);
}


function loadILLoan(loanId) {

	var loanUrl = 'loans/' + loanId + "?associations=all";

	var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
	        	handleXhrError(jqXHR, status, errorThrown, "#formErrorsTemplate", "#formerrors");
	        	//$(anchor.hash).html("error occured while ajax loading.");
	};

	var successFunction = function(data, status, xhr) {
	        	
	        		var currentTabIndex = $newtabs.tabs('option', 'selected');
	            	var currentTabAnchor = $newtabs.data('tabs').anchors[currentTabIndex];
	            
	            	var offsetToSubmittedDate = 0;
	            	var offsetToApprovalDate = 0;
	            	var offsetToDisbursalDate = 0;
	            	var maxOffset = 0; // today


	        		var tableHtml = $("#loanDataTabTemplate").render(data);
	        		
	        		var currentTab = $("#newtabs").children(".ui-tabs-panel").not(".ui-tabs-hide");
	        		currentTab.html(tableHtml);

	        		var curTabID = currentTab.prop("id")
	        		
	        		offsetToSubmittedDate = data.convenienceData.maxSubmittedOnOffsetFromToday;
	        		offsetToApprovalDate = data.convenienceData.maxApprovedOnOffsetFromToday;
	        		offsetToDisbursalDate = data.convenienceData.maxDisbursedOnOffsetFromToday;
	        		
	        		var $loantabs = $(".loantabs").tabs({
						"show": function(event, ui) {
							var curTab = $('#newtabs .ui-tabs-panel:not(.ui-tabs-hide)');
			      			var curTabID = curTab.prop("id")
						}
					});
	        		
	        		$('.rejectloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("rejectbtn", "");
						var postUrl = 'loans/' + loanId + '?command=reject';
						var templateSelector = "#stateTransitionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToSubmittedDate;

						popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.reject.loan', templateSelector, width, height, saveSuccessFunctionReloadClient, offsetToSubmittedDate, defaultOffset, maxOffset);
					    e.preventDefault();
					});
	        		$('button.rejectloan span').text(doI18N('dialog.button.reject.loan'));
					
				$('.withdrawnbyapplicantloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("withdrawnbyapplicantloanbtn", "");
						var postUrl = 'loans/' + loanId + '?command=withdrewbyclient';
						var templateSelector = "#stateTransitionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToSubmittedDate;
						popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.loan.withdrawn.by.client', templateSelector, width, height, saveSuccessFunctionReloadClient,  offsetToSubmittedDate, defaultOffset, maxOffset)
					    e.preventDefault();
				});
				$('button.withdrawnbyapplicantloan span').text(doI18N('dialog.button.withdrawn.by.client.loan'));
				
				$('.modifyloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("modifybtn", "");
					modifyILLoan(loanId);
				    e.preventDefault();
				});
				$('button.approveloan span').text(doI18N('dialog.button.modify'));
					
				$('.approveloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("approvebtn", "");
						var postUrl = 'loans/' + loanId + '?command=approve';
						var templateSelector = "#stateTransitionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToSubmittedDate;
						eval(genSaveSuccessFunctionReloadLoan(loanId));
						popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.approve.loan', templateSelector, width, height, saveSuccessFunctionReloadLoan,  offsetToSubmittedDate, defaultOffset, maxOffset)
					    e.preventDefault();
				});
				$('button.approveloan span').text(doI18N('dialog.button.approve.loan'));
					
				$('.undoapproveloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("undoapprovebtn", "");
						var postUrl = 'loans/' + loanId + '?command=undoapproval';
						var templateSelector = "#undoStateTransitionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToSubmittedDate;
						eval(genSaveSuccessFunctionReloadLoan(loanId));
						popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.undo.loan.approval', templateSelector, width, height, saveSuccessFunctionReloadLoan, offsetToSubmittedDate, defaultOffset, maxOffset)
					    e.preventDefault();
				});
				$('button.undoapproveloan span').text(doI18N('dialog.button.undo.loan.approval'));
					
				$('.deleteloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("deletebtn", "");
						var url = 'loans/' + loanId;
						var width = 400; 
						var height = 225;
												
						popupConfirmationDialogAndPost(url, 'DELETE', 'dialog.title.confirmation.required', width, height, 0, saveSuccessFunctionReloadClient);
					    e.preventDefault();
				});
				$('button.deleteloan span').text(doI18N('dialog.button.delete.loan'));
					
				$('.disburseloan').button().click(function(e) {
						
						var linkId = this.id;
						var loanId = linkId.replace("disbursebtn", "");
						var postUrl = 'loans/' + loanId + '?command=disburse';
						var templateSelector = "#stateTransitionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToApprovalDate;
						eval(genSaveSuccessFunctionReloadLoan(loanId));
						popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.disburse.loan', templateSelector, width, height, saveSuccessFunctionReloadLoan,  offsetToSubmittedDate, defaultOffset, maxOffset)
					    e.preventDefault();
				});
				$('button.disburseloan span').text(doI18N('dialog.button.disburse.loan'));
					
				$('.undodisbursalloan').button().click(function(e) {
						
						var linkId = this.id;
						var loanId = linkId.replace("undodisbursalbtn", "");
						var postUrl = 'loans/' + loanId + '?command=undodisbursal';
						var templateSelector = "#undoStateTransitionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToApprovalDate;
						eval(genSaveSuccessFunctionReloadLoan(loanId));
						popupDialogWithPostOnlyFormView(postUrl, 'POST', 'dialog.title.undo.loan.disbursal', templateSelector, width, height, saveSuccessFunctionReloadLoan,  offsetToSubmittedDate, defaultOffset, maxOffset)
					    e.preventDefault();
				});
				$('button.undodisbursalloan span').text(doI18N('dialog.button.undo.loan.disbursal'));
					
				$('.repaymentloan').button().click(function(e) {
						
						var linkId = this.id;
						var loanId = linkId.replace("repaymentbtn", "");
						var getUrl = 'loans/' + loanId + '/transactions/template?command=repayment';
						var postUrl = 'loans/' + loanId + '/transactions?command=repayment';
						
						var templateSelector = "#transactionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToApprovalDate;
						eval(genSaveSuccessFunctionReloadLoan(loanId));
			
						popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.loan.repayment", templateSelector, width, height,  saveSuccessFunctionReloadLoan);
						//popupDialogWithFormView(getUrl, postUrl, 'POST', 'dialog.title.loan.repayment', templateSelector, width, height, currentTabIndex,  offsetToSubmittedDate, defaultOffset, maxOffset)
					    e.preventDefault();
				});
				$('button.repaymentloan span').text(doI18N('dialog.button.loan.repayment'));
					
				$('.waiveinterestloan').button().click(function(e) {
						var linkId = this.id;
						var loanId = linkId.replace("waiveinterestbtn", "");
						
						var getUrl = 'loans/' + loanId + '/transactions/template?command=waiveinterest';
						var postUrl = 'loans/' + loanId + '/transactions?command=waiveinterest';
						
						var templateSelector = "#transactionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToApprovalDate;
						
						eval(genSaveSuccessFunctionReloadLoan(loanId));
						
						popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.waive.loan", templateSelector, width, height, saveSuccessFunctionReloadLoan);
					    e.preventDefault();
				});
				$('button.waiveloan span').text(doI18N('dialog.button.loan.waive'));
				
				$('.writeoffloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("writeoffbtn", "");
					
					var getUrl = 'loans/' + loanId + '/transactions/template?command=writeoff';
					var postUrl = 'loans/' + loanId + '/transactions?command=writeoff';
					
					var templateSelector = "#loanTransactionWriteOffFormTemplate";
					var width = 500;
					var height = 350;
					var defaultOffset = offsetToApprovalDate;
					
					eval(genSaveSuccessFunctionReloadLoan(loanId));
					
					popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.writeoff.loan", templateSelector, width, height, saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				$('button.writeoffloan span').text(doI18N('dialog.button.loan.writeoff'));
				
				$('.closeasrescheduledloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("closeasrescheduledbtn", "");
					
					var getUrl = 'loans/' + loanId + '/transactions/template?command=close-rescheduled';
					var postUrl = 'loans/' + loanId + '/transactions?command=close-rescheduled';
					
					var templateSelector = "#loanTransactionWriteOffFormTemplate";
					var width = 500;
					var height = 350;
					var defaultOffset = offsetToApprovalDate;
					
					eval(genSaveSuccessFunctionReloadLoan(loanId));
					
					popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.closeasrescheduledloan.loan", templateSelector, width, height, saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				$('button.closeasrescheduledloan span').text(doI18N('dialog.button.loan.closeasrescheduledloan'));
				
				$('.closeloan').button().click(function(e) {
					var linkId = this.id;
					var loanId = linkId.replace("closebtn", "");
					
					var getUrl = 'loans/' + loanId + '/transactions/template?command=close';
					var postUrl = 'loans/' + loanId + '/transactions?command=close';
					
					var templateSelector = "#loanTransactionWriteOffFormTemplate";
					var width = 500;
					var height = 350;
					var defaultOffset = offsetToApprovalDate;
					
					eval(genSaveSuccessFunctionReloadLoan(loanId));
					
					popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.title.close.loan", templateSelector, width, height, saveSuccessFunctionReloadLoan);
				    e.preventDefault();
				});
				$('button.closeloan span').text(doI18N('dialog.button.loan.close'));
					
				$('.adjustloanrepayment').button().click(function(e) {
						
						var linkId = this.id;
						var loanAndRepaymentId = linkId.replace("adjustrepaymentbtn", "");
						var ids = loanAndRepaymentId.split("_");
						var loanId = ids[0];
						var transactionId = ids[1];
						var getAndPostUrl = 'loans/' + loanId + '/transactions/' + transactionId;
						
						var templateSelector = "#transactionLoanFormTemplate";
						var width = 500; 
						var height = 350;
						var defaultOffset = offsetToApprovalDate;

						eval(genSaveSuccessFunctionReloadLoan(loanId));						
						popupDialogWithFormView(getAndPostUrl, getAndPostUrl, 'POST', "dialog.title.adjust.loan.repayment", templateSelector, width,  height, saveSuccessFunctionReloadLoan);
					    e.preventDefault();
				});
				$('button.adjustloanrepayment span').text(doI18N('dialog.button.adjust.loan.repayment'));
				
				$('.addloancharge').button().click(function(e){

						var linkId = this.id;
						var loanId = linkId.replace("addloanchargebtn", "");
						var postUrl = 'loans/' + loanId + '/charges';
						var getUrl = 'loans/' + loanId + '/charges/template';

						var templateSelector = "#loanChargeFormTemplate";
						var width = 450; 
						var height = 300;

						eval(genSaveSuccessFunctionReloadLoan(loanId));
						popupDialogWithFormView(getUrl, postUrl, 'POST', "dialog.button.add.loan.charge", templateSelector, width,  height, saveSuccessFunctionReloadLoan);
					    e.preventDefault();
				});
				$('button.addloancharge span').text(doI18N('dialog.button.add.loan.charge'));

				showRelatedDataTableInfo($loantabs, "m_loan", loanId, []); 

				// additional data
				var additionalFieldsParams = {
							url: baseApiUrl,
							basicAuthKey: base64,
							tenantIdentifier: tenantIdentifier,
							datasetType: "m_loan",
							datasetPKValue: data.id,
							datasetTypeDiv: "loanadditionaldata" + data.id, 
							headingPrefix: "", 
							headingClass: "", 
							labelClass: "longrowlabel",
							valueClass:	"rowvalue",
							editLabel: doI18N("link.edit"),	
							saveLabel: doI18N("dialog.button.save"),	
							cancelLabel: doI18N("dialog.button.cancel")						
				};
				//will fully delete after (JPW) jQuery.stretchyData.displayAllExtraData(additionalFieldsParams)
	        };
	    
		executeAjaxRequest(loanUrl, 'GET', "", successFunction, errorFunction);	  

}


/* crud admin code */

	function refreshTableView(tableName) {

		var successFunction = function(data, textStatus, jqXHR) {

				var crudObject = new Object();
				crudObject.crudRows = data;
				var html = $("#" + tableName + "ListTemplate").render(crudObject);
				$("#listplaceholder").html(html);  
				
				$("a.edit" + tableName).click( function(e) {
					var linkId = this.id;
					var entityId = linkId.replace("edit" + tableName, "");

					var resourceUrl = tableName + "s/" + entityId;
					if(tableName == 'employee'){
						resourceUrl = "staff" + "/" + entityId;
					}
					maintainTable(tableName, resourceUrl, 'PUT');
					e.preventDefault();
				});

				$("a.delete" + tableName).click( function(e) {
					
					if (tableName === 'savingproduct' ||tableName === 'depositproduct' || tableName ==='charge' || tableName ==='user') {
						var linkId = this.id;
						var entityId = linkId.replace("delete" + tableName, "");

						var resourceUrl = tableName + "s/" + entityId;
						var width = 400; 
						var height = 150;
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
						  	refreshTableView(tableName);
						};
						popupConfirmationDialogAndPost(resourceUrl, 'DELETE', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
					} else {
						showNotAvailableDialog('dialog.title.functionality.not.available');	
					}
					
					e.preventDefault();
				});
				
				$("a.deactivate"  + tableName).click( function(e) {
					showNotAvailableDialog('dialog.title.functionality.not.available');
					e.preventDefault();
				});
				
				$("a.changepassword"  + tableName).click( function(e) {
					var linkId = this.id;
					var entityId = linkId.replace("changepassword" + tableName, "");
					
					if (tableName ==='user') {
						var putUrl = 'users/' + entityId;
						var templateSelector = "#changePasswordFormTemplate";
						var width = 600; 
						var height = 350;
						
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
							$("#dialog-form").dialog("close");
							resetBasicAuthKeyWithOutSwitchingScreen();
						}
						
						popupDialogWithPostOnlyFormView(putUrl, 'PUT', 'dialog.title.update.password', templateSelector, width, height, saveSuccessFunction, 0, 0, 0);
					}
					e.preventDefault();
				});

				$("a.deregister" + tableName).click( function(e) {
					
						var linkId = this.id;
						var entityId = linkId.replace("deregister" + tableName, "");

						var resourceUrl = tableName + "s/deregister/" + entityId;
						var width = 400; 
						var height = 150;
						var saveSuccessFunction = function(data, textStatus, jqXHR) {
						  	$("#dialog-form").dialog("close");
						  	refreshTableView(tableName);
						};
						popupConfirmationDialogAndPost(resourceUrl, 'POST', 'dialog.title.confirmation.required', width, height, entityId, saveSuccessFunction);
					
						e.preventDefault();
				});

				var oTable = displayListTable(tableName + "stable");
			  };
		
		if(tableName=="employee"){
			executeAjaxRequest('staff', 'GET', "", successFunction, formErrorFunction);
		}else{
  			executeAjaxRequest(tableName + 's', 'GET', "", successFunction, formErrorFunction);
  		}
	}
	

	function maintainTable(tableName, resourceUrl, submitType, putPostQuery) {

		if (!(submitType == "PUT" || submitType == "POST"))
		{
			alert("System Error - Invalid submitType: " + submitType);
			return;
		}

		var templateSelector = "#" + tableName + "FormTemplate";
		var dialogTitle = "dialog.title." + tableName + ".details";
		if (submitType == "POST") dialogTitle = 'dialog.title.add.' + tableName;

		
		var genSSF = 'var saveSuccessFunction = function(data, textStatus, jqXHR) {';
		genSSF += '$("#dialog-form").dialog("close");';
		if (crudData[tableName].refreshListNeeded == true) genSSF += 'refreshTableView("' + tableName + '");';
		genSSF += '}';
		eval(genSSF);

//datatable specific code
		if (tableName == "datatable") 
		{
			dialogTitle = 'dialog.title.register.datatable';
			popupRegisterDatatableDialog('dialog.title.register.datatable', templateSelector, crudData[tableName].dialogWidth, crudData[tableName].dialogHeight, saveSuccessFunction, 0, 0, 0);
			return false;
		}
//end datatable specific code

		var getUrl = ''; 
		var putPostUrl = resourceUrl;
		if (putPostQuery > "") putPostUrl += "?" + putPostQuery;

		if (submitType == "POST") 
		{
			if (crudData[tableName].editTemplateNeeded == true) //needs to read data to populate dialog form
			{
				if(tableName== "employee"){
					getUrl = "offices" 
				}else{
					getUrl = resourceUrl + '/template';
				}
				
				popupDialogWithFormView(getUrl, putPostUrl, submitType, dialogTitle, templateSelector, crudData[tableName].dialogWidth, crudData[tableName].dialogHeight, saveSuccessFunction);
			}
			else popupDialogWithPostOnlyFormView(putPostUrl, submitType, dialogTitle, templateSelector, crudData[tableName].dialogWidth, crudData[tableName].dialogHeight, saveSuccessFunction, 0, 0, 0);
		}
		else
		{
			if (crudData[tableName].editTemplateNeeded == true) getUrl = resourceUrl + '?template=true'
			else getUrl = resourceUrl;
			popupDialogWithFormView(getUrl, putPostUrl, submitType, dialogTitle, templateSelector, crudData[tableName].dialogWidth, crudData[tableName].dialogHeight, saveSuccessFunction);
		}

	}


		

/* reports code */

function showILReporting(reportCategory) {
	setReportingContent("content");

//var reportingParams = {
 reportingParams = {
	RESTUrl: baseApiUrl + "reports",
	basicAuthKey: base64,
	tenantIdentifier: tenantIdentifier,
	initialLanguage: currentCulture,
	bundleDir: "resources/stretchyreporting/mifosngbundle/",
	reportsListDiv: "myListOfReports",
	runReportDiv: "myRunReportButton",
	clearReportDiv: "myClearReportButton",
	inputParametersDiv: "myInputParameters",
	reportOutputDiv: "myOutput",
	indianFormat: false,
	highlightMissingXlations: "N",
	loadingImg: "resources/stretchyreporting/dots64.gif",
	resValue: "resources/libs/"
};

	if (reportCategory)
	{
		reportingParams.reportQuery = 'reportCategoryList';
		reportingParams.reportQueryParams = {
									"reportCategory": reportCategory
								};
	}

	jQuery.stretchyReporting.initialise(reportingParams);

	$("#toptable").slideToggle("slow");

}

function selectNewDecimals(selectedVal) {
	if (!(selectedVal == "")) jQuery.stretchyReporting.changeDecimals(selectedVal);
}

function selectNewThousandsSep(selectedVal) {

	if (!(selectedVal == "")) 
	{

		switch(selectedVal )
		{
			case "INDIAN":
				jQuery.stretchyReporting.changeSeparator(",", ".", true);
  				break;
			case "NONE":
				jQuery.stretchyReporting.changeSeparator("", ".", false);
  				break;
			default:
				jQuery.stretchyReporting.changeSeparator(selectedVal.substr(0,1), selectedVal.substr(1,1), false);
		}
	}
}


//account settings
function showILAccountSettings() {

	setAccountSettingsContent("content"); 
	$tabs = $("#tabs").tabs({
		"add": function( event, ui ) {
			$tabs.tabs('select', '#' + ui.panel.id);
		}

	});

	var errorFunction = function(jqXHR, status, errorThrown, index, anchor) {
	            $(anchor.hash).html("error occured while ajax loading.");
	        };

	var successFunction = function(data, status, xhr) {
				var tableHtml = $("#userSettingsTemplate").render(data);
				$("#settings").html(tableHtml);
				
				$('#changepassword').click(function(e) {
					var putUrl = 'users/' + currentUser;
					var templateSelector = "#changePasswordFormTemplate";
					var width = 600; 
					var height = 350;
					
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
						$("#dialog-form").dialog("close");
						resetBasicAuthKey();
						  //$("#tabs").tabs('load', 0);
					}
					
					popupDialogWithPostOnlyFormView(putUrl, 'PUT', 'dialog.title.update.password', templateSelector, width, height, saveSuccessFunction, 0, 0, 0);
				    e.preventDefault();
				});
				
				$('#changedetails').click(function(e) {
					var getAndPutUrl = 'users/' + currentUser;
					var templateSelector = "#userSettingsFormTemplate";
					var width = 600; 
					var height = 350;
					
					var saveSuccessFunction = function(data, textStatus, jqXHR) {
						$("#dialog-form").dialog("close");
						resetBasicAuthKey();

						  //$("#tabs").tabs('load', 0);
					}
					
					popupDialogWithFormView(getAndPutUrl, getAndPutUrl, 'PUT', 'dialog.title.update.details', templateSelector, width, height, saveSuccessFunction);
					
				    e.preventDefault();
				});
	        };
    
	executeAjaxRequest("users/" + currentUser, 'GET', "", successFunction, errorFunction);	  
}
	


//authenticate user and set global details
function setBasicAuthKey(logonDivName, username, password) 
{ 

	base64 = "";
	currentUser = -1;
	currentUserName = "";
	currentPwd = "";
	newPassword = "";
	newUserName = "";


	var url = "authentication?username=" + username + "&password=" + password;
	var successFunction = function(data, textStatus, jqXHR) { 
					base64 = data.base64EncodedAuthenticationKey; 
					currentUser = data.userId;
					currentUserName = data.username;
					currentPwd = password;

					jQuery.MifosXUI.initialise(data.permissions, applicationProfile, tenantIdentifier );

					showMainContainer(logonDivName, username);
					showILClientListing();
					return false;
			};

	var errorFunction = function(jqXHR, textStatus, errorThrown) {
	        			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
					return true;
				};

	executeAjaxRequest(url, 'POST', "", successFunction, errorFunction);
}

function resetBasicAuthKeyWithOutSwitchingScreen() 
{ 
	base64 = "";
	var usePassword = currentPwd;
	if (newPassword > "") usePassword = newPassword;
	var useUserName = currentUserName;
	if (newUserName > "") useUserName = newUserName;
	
	//alert("reset: currentUser: " + currentUser);

	var url = "authentication?username=" + useUserName + "&password=" + usePassword;
	var successFunction = function(data, textStatus, jqXHR) {
		    //alert("success: currentUser: " + currentUser + " >> " + data.userId);
			if (currentUser == data.userId) {
					base64 = data.base64EncodedAuthenticationKey; 
					currentUser = data.userId;
					currentUserName = data.username;
					currentPwd = usePassword;
					$("#displayUN").html(currentUserName);
					newPassword = "";
					newUserName = "";
			}
			return false;
	};

	var errorFunction = function(jqXHR, textStatus, errorThrown) {
		handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
		return true;
	};
	
	executeAjaxRequest(url, 'POST', "", successFunction, errorFunction);
}

function resetBasicAuthKey() 
{ 

	base64 = "";
	var usePassword = currentPwd;
	if (newPassword > "") usePassword = newPassword;
	var useUserName = currentUserName;
	if (newUserName > "") useUserName = newUserName;

	var url = "authentication?username=" + useUserName + "&password=" + usePassword;
	var successFunction = function(data, textStatus, jqXHR) { 
					base64 = data.base64EncodedAuthenticationKey; 
					currentUser = data.userId;
					currentUserName = data.username;
					currentPwd = usePassword;
					$("#displayUN").html(currentUserName);
					showILAccountSettings();
					newPassword = "";
					newUserName = "";
					return false;
			};

	var errorFunction = function(jqXHR, textStatus, errorThrown) {
	        			handleXhrError(jqXHR, textStatus, errorThrown, "#formErrorsTemplate", "#formerrors");
					return true;
				};

	executeAjaxRequest(url, 'POST', "", successFunction, errorFunction);

}



//Popups used for saving data and confirmation	
function popupDialogWithFormView(getUrl, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction) {

		var successFunction = function(data, textStatus, jqXHR) {
				//console.log(data);
				if(templateSelector == "#employeeFormTemplate" && submitType!= "PUT"){
					var officesObject = new Object();
			    	officesObject.crudRows = data;
					popupDialogWithFormViewData(officesObject, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction);
				}else if(templateSelector == "#employeeFormTemplate" && submitType == "PUT") {
					templateSelector = "#employeeFormEditTemplate";
					popupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction);
				}
				else{
					popupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction);
		  		}
		  	};
		
		if (getUrl == "") popupDialogWithFormViewData("", postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
		else executeAjaxRequest(getUrl, "GET", "", successFunction, formErrorFunction);

}
function popupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)  {
				var dialogDiv = $("<div id='dialog-form'></div>");
				var saveButton = doI18N('dialog.button.save');
				var cancelButton = doI18N('dialog.button.cancel');
				
				var buttonsOpts = {};
				buttonsOpts[saveButton] = function() {
					
					$('#notSelectedClients option').each(function(i) {
						$(this).attr("selected", "selected");
					});
					$('#clientMembers option').each(function(i) {
						$(this).attr("selected", "selected");
					});

					$('#notSelectedCharges option').each(function(i) {
						$(this).attr("selected", "selected");
					});
					$('#charges option').each(function(i) {
						$(this).attr("selected", "selected");
					});

					$('#notSelectedPermissions option').each(function(i) {  
						$(this).attr("selected", "selected");  
					});
				    	
			    	$('#permissions option').each(function(i) {  
			    	   	$(this).attr("selected", "selected");  
			    	});

				    $('#notSelectedRoles option').each(function(i) {  
						$(this).attr("selected", "selected");  
					});
				    
			    	$('#roles option').each(function(i) {  
			    	   	$(this).attr("selected", "selected");  
			    	});

					$('#notSelectedItems option').each(function(i) {  
				    	   $(this).attr("selected", "selected");  
				    });
					
		    		$('#selectedItems option').each(function(i) {  
		    	   		$(this).attr("selected", "selected");  
		    		});

					$('#notSelectedCurrencies option').each(function(i) {  
					    	   	$(this).attr("selected", "selected");  
					});
					
			    	$('#currencies option').each(function(i) {  
			    	   		$(this).attr("selected", "selected");  
			    	});

					if (document.changeUserSettingsForm!=undefined) {
						newUserName = document.changeUserSettingsForm.username.value;
					}

					var serializedArray = {};
					serializedArray = $('#entityform').serializeObject();
					
					if (!serializedArray["charges"] && postUrl.substring(0, 13) == "loanproducts/") {
						serializedArray["charges"] = new Array();
					}
					
			    	var newFormData = JSON.stringify(serializedArray);
			    	if (postUrl.toLowerCase().indexOf("documents") >= 0){
			    		var formData = new FormData();    
						formData.append( 'file', $('#file')[0].files[0] );
						$.each(serializedArray, function (name, val) {
					        formData.append(name, val);
					    });	
			    		executeMultipartUploadAjaxRequest(postUrl, submitType, formData, saveSuccessFunction, formErrorFunction);
			    	}else{
			    		executeAjaxRequest(postUrl, submitType, newFormData, saveSuccessFunction, formErrorFunction);
			    	}
					
				};
				
				buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
				
				dialogDiv.dialog({
				  		title: doI18N(titleCode), 
				  		width: width, 
				  		height: height, 
				  		modal: true,
				  		buttons: buttonsOpts,
				  		close: function() {
				  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
				  			$(this).remove();
						},
				  		open: function (event, ui) {
				  			repopulateOpenPopupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction);
				  		}
				  	}).dialog('open');
}

function repopulateOpenPopupDialogWithFormViewData(data, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction){
	var dialogDiv = $("#dialog-form");
	var formHtml = $(templateSelector).render(data);
	dialogDiv.html(formHtml);

	//attaching charges to loan from popup
	$('#chargeOptions').change(function(e) {
		if ($(this).val() > 0){
			var selectChargeForLoanSuccess = function(chargeData, textStatus, jqXHR){
				var partialFormHtml = $("#loanChargeDetailsPartialFormTemplate").render(chargeData);
				$("#loanChargeDetails").html(partialFormHtml);
			}
			executeAjaxRequest("charges/" + $(this).val() + "?template=true", "GET", "", selectChargeForLoanSuccess, formErrorFunction);    	
		}
	})

	if (templateSelector === "#groupFormTemplate"){
		$("#dialog-form #officeId").change(function(e){
			var selectedOfficeId = $(this).val();
			var officeIdChangeSuccess = function(groupData, textStatus, jqXHR){
				groupData['officeId'] = selectedOfficeId;
				repopulateOpenPopupDialogWithFormViewData(groupData, postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction)
			}
			if (data['id']){
				executeAjaxRequest("groups/" + data['id'] + "?template=true&officeId=" + selectedOfficeId, "GET", "", officeIdChangeSuccess, formErrorFunction);	
			} else {
				executeAjaxRequest("groups/template?officeId=" + selectedOfficeId, "GET", "", officeIdChangeSuccess, formErrorFunction);	
			}
		})
	}

	$('#addclientmembers').click(function() {  
		return !$('#notSelectedClients option:selected').remove().appendTo('#clientMembers');  
	});
	$('#removeclientmembers').click(function() {  
		return !$('#clientMembers option:selected').remove().appendTo('#notSelectedClients');  
	});

	$('#addcharges').click(function() {  
		return !$('#notSelectedCharges option:selected').remove().appendTo('#charges');  
	});
	$('#removecharges').click(function() {  
		return !$('#charges option:selected').remove().appendTo('#notSelectedCharges');  
	});

	$('#addpermissions').click(function() {  
		return !$('#notSelectedPermissions option:selected').remove().appendTo('#permissions');  
	});
	$('#removepermissions').click(function() {  
		return !$('#permissions option:selected').remove().appendTo('#notSelectedPermissions');  
	}); 

	$('#addroles').click(function() {  
		return !$('#notSelectedRoles option:selected').remove().appendTo('#roles');  
	});	
	$('#removeroles').click(function() {  
		return !$('#roles option:selected').remove().appendTo('#notSelectedRoles');  
	}); 

	$('#add').click(function() {  
	     return !$('#notSelectedItems option:selected').remove().appendTo('#selectedItems');  
	});
	$('#remove').click(function() {  
		return !$('#selectedItems option:selected').remove().appendTo('#notSelectedItems');  
	});

	$('#addcurrencies').click(function() {  
		return !$('#notSelectedCurrencies option:selected').remove().appendTo('#currencies');  
	});
	$('#removecurrencies').click(function() {  
		return !$('#currencies option:selected').remove().appendTo('#notSelectedCurrencies');  
	});

	$('.datepickerfield').datepicker({constrainInput: true, maxDate: 0, dateFormat: 'dd MM yy'});

	$("#entityform textarea").first().focus();
	$('#entityform input').first().focus();	
}

function popupRegisterDatatableDialog(titleCode, templateSelector, width, height, saveSuccessFunction) {

var dialogDiv = $("<div id='dialog-form'></div>");
var data = new Object();
var formHtml = $(templateSelector).render(data);
dialogDiv.append(formHtml);

var saveButton = doI18N('dialog.button.save');
var cancelButton = doI18N('dialog.button.cancel');
var buttonsOpts = {};		

buttonsOpts[saveButton] = function() {
	var registerUrl = "datatables/register/" + document.registerDatatableForm.registeredTableName.value + "/" + document.registerDatatableForm.applicationTableName.value;
	// alert(registerUrl )
	executeAjaxRequest(registerUrl, "POST", {}, saveSuccessFunction, formErrorFunction);
};
buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};

dialogDiv.dialog({
  		title: doI18N(titleCode), 
  		width: width, 
  		height: height, 
  		modal: true,
  		buttons: buttonsOpts,
  		close: function() {
  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
  			$(this).remove();
		},
  		open: function (event, ui) {  			
  			$("#entityform textarea").first().focus();
  			$('#entityform input').first().focus();
  		}
  }).dialog('open');
}


// used by deposit account functionality
function popupDialogWithPostOnlyFormView(postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction) {
var dialogDiv = $("<div id='dialog-form'></div>");
var data = new Object();
var formHtml = $(templateSelector).render(data);
dialogDiv.append(formHtml);

var saveButton = doI18N('dialog.button.save');
var cancelButton = doI18N('dialog.button.cancel');
var buttonsOpts = {};		
buttonsOpts[saveButton] = function() {
	$('.multiSelectedItems option').each(function(i) {  
    	   		$(this).attr("selected", "selected");  
    		});

	if (document.changePasswordForm!=undefined) newPassword = document.changePasswordForm.password.value;

	var newFormData = JSON.stringify($('#entityform').serializeObject());
	//console.log(newFormData);

	executeAjaxRequest(postUrl, submitType, newFormData, saveSuccessFunction, formErrorFunction);
};
buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};

dialogDiv.dialog({
  		title: doI18N(titleCode), 
  		width: width, 
  		height: height, 
  		modal: true,
  		buttons: buttonsOpts,
  		close: function() {
  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
  			$(this).remove();
		},
  		open: function (event, ui) {
  			$('.multiadd').click(function() {  
  			     return !$('.multiNotSelectedItems option:selected').remove().appendTo('#selectedItems');  
  			});
  			
  			$('.multiremove').click(function() {  
  				return !$('.multiSelectedItems option:selected').remove().appendTo('#notSelectedItems');  
  			});
  			
  			$('.datepickerfield').datepicker({constrainInput: true, dateFormat: 'dd MM yy'});
  			
  			$("#entityform textarea").first().focus();
  			$('#entityform input').first().focus();
  		}
  }).dialog('open');
}

function popupDialogWithPostOnlyFormView(postUrl, submitType, titleCode, templateSelector, width, height, saveSuccessFunction, minOffset, defaultOffset, maxOffset) {
		var dialogDiv = $("<div id='dialog-form'></div>");
		var data = new Object();
		var formHtml = $(templateSelector).render(data);
		dialogDiv.append(formHtml);
		
		var saveButton = doI18N('dialog.button.save');
		var cancelButton = doI18N('dialog.button.cancel');
		var buttonsOpts = {};		
		buttonsOpts[saveButton] = function() {
			$('.multiSelectedItems option').each(function(i) {  
		    	   		$(this).attr("selected", "selected");  
		    		});

			if (document.changePasswordForm!=undefined) newPassword = document.changePasswordForm.password.value;

			var newFormData = JSON.stringify($('#entityform').serializeObject());
			executeAjaxRequest(postUrl, submitType, newFormData, saveSuccessFunction, formErrorFunction);
		};
		buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
		
		dialogDiv.dialog({
		  		title: doI18N(titleCode), 
		  		width: width, 
		  		height: height, 
		  		modal: true,
		  		buttons: buttonsOpts,
		  		close: function() {
		  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
		  			$(this).remove();
				},
		  		open: function (event, ui) {
		  			$('.multiadd').click(function() {  
		  			     return !$('.multiNotSelectedItems option:selected').remove().appendTo('#selectedItems');  
		  			});
		  			
		  			$('.multiremove').click(function() {  
		  				return !$('.multiSelectedItems option:selected').remove().appendTo('#notSelectedItems');  
		  			});
		  			
		  			$('.datepickerfield').datepicker({constrainInput: true, minDate: minOffset, defaultDate: defaultOffset, maxDate: maxOffset, dateFormat: 'dd MM yy'});
		  			
		  			$("#entityform textarea").first().focus();
		  			$('#entityform input').first().focus();
		  		}
		  }).dialog('open');
}

function popupConfirmationDialogAndPost(url, submitType, titleCode, width, height, tabIndex, saveSuccessFunction) {
		    var dialogDiv = $("<div id='dialog-form'><div id='formerrors'></div>" + doI18N('text.confirmation.required') + "</div>");
		  
		  	var confirmButton = doI18N('dialog.button.confirm');
			var cancelButton = doI18N('dialog.button.cancel');
			
			var buttonsOpts = {};
			buttonsOpts[confirmButton] = function() {
				executeAjaxRequest(url, submitType, "", saveSuccessFunction, formErrorFunction);
			};
			
			buttonsOpts[cancelButton] = function() {$(this).dialog( "close" );};
		  
		  dialogDiv.dialog({
		  		title: doI18N(titleCode), 
		  		width: width, 
		  		height: height, 
		  		modal: true,
		  		buttons: buttonsOpts,
		  		close: function() {
		  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
		  			$(this).remove();
				},
		  		open: function (event, ui) {}
		  	}).dialog('open');
}



//sign-out
function signOut(containerDivName) {
	base64 = "";
	$("#" + containerDivName).html("");
	alert("Close the Browser for a Complete Sign Out");
}
//utility functions

highlightMissingXlations = "N";
function doI18N(xlateStr, params) { 
	if (highlightMissingXlations == "Y") return jQuery.i18n.prop(xlateStr, params)
	else
	{
		var xlated = jQuery.i18n.prop(xlateStr, params,arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);
		if (xlated.substr(0,1) == "[" && xlated.substr(xlated.length - 1, 1) == "]") return xlated.substr(1, xlated.length - 2)
		else return xlated;
	}
}


function initialiseAndShowILLogon() {
	jQuery.support.cors = true;

	setInitialCulture();

	jsViewsRegisterHelpers();

	baseApiUrl = getBaseApiURL(window.location.href);

	applicationProfile = "ALL";
	if (QueryParameters["applicationProfile"]) applicationProfile = QueryParameters["applicationProfile"];

	showILLogon("container");
}

function getBaseApiURL(docURL)
{
	var l = getLocation(docURL);
	
	var baseApiUrl = "";
	if (l.hostname == "localhost" || l.hostname == "" || l.hostname == null) {
		baseApiUrl = "https://demo.openmf.org/mifosng-provider/api/v1/";
	}
	else if (l.hostname == "demo.openmf.org") {
		baseApiUrl = "/mifosng-provider/api/v1/";
	} else {
		baseApiUrl = "https://ec2-46-137-62-163.eu-west-1.compute.amazonaws.com:8443/mifosng-provider/api/v1/";
	}
	
	if (QueryParameters["baseApiUrl"]) {
		baseApiUrl = QueryParameters["baseApiUrl"];
	}
    
    return baseApiUrl; 
}

getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

function setInitialCulture() {

	baseCulture = 'en';
	if (QueryParameters["baseCulture"]) baseCulture = QueryParameters["baseCulture"];
	switch(baseCulture)
	{
			case "en":
  				break;
			case "fr":
  				break;
			case "es":
  				break;
			case "pt":
  				break;
			case "zh":
  				break;
			default:
  				alert("The culture/language you specified (" + baseCulture + ") isn't available so will default to 'en' (English).");
				baseCulture = 'en';
	}
	setCulture(baseCulture);	
}

function setCultureReshowListing(cultureVal) {
	setCulture(cultureVal);
	showMainContainer("container");
	showILClientListing();
}


function setCulture(cultureVal) {
	currentCulture = cultureVal;
    	Globalize.culture(currentCulture);
    	
    	$.datepicker.setDefaults( $.datepicker.regional[currentCulture]);
    	
    	jQuery.i18n.properties({
			name:'messages', 
			path: 'resources/global-translations/',
			mode:'map',
			cache: true,
			language: currentCulture,
			callback: function() {
			}
		});
}


QueryParameters = (function()
{
    var result = {};
    if (window.location.search)
    {
        // split up the query string and store in an associative array
        var params = window.location.search.slice(1).split("&");
        for (var i = 0; i < params.length; i++)
        {
            var tmp = params[i].split("=");
            result[tmp[0]] = unescape(tmp[1]);
        }
    }
    return result;
}());


function showNotAvailableDialog(titleCode) {
		var dialogDiv = $("<div id='notavailable-dialog-form'></div>");
		
		dialogDiv.append("<p>" + doI18N('dialog.messages.functionality.not.available') + "</p>");
		
		var okButton = doI18N('dialog.button.ok');
		
		var buttonsOpts = {};
		buttonsOpts[okButton] = function() {$(this).dialog("close");};
		
		dialogDiv.dialog({
	  		title: doI18N(titleCode), 
	  		width: 300, 
	  		height: 200, 
	  		modal: true,
	  		buttons: buttonsOpts,
	  		close: function() {
	  			// if i dont do this, theres a problem with errors being appended to dialog view second time round
	  			$(this).remove();
			}
		 }).dialog('open');
}
	
$.fn.serializeObject = function()
{
	var o = {};
	var a = this.serializeArray({ checkboxesAsBools: true});
	var arrayName, propertyName, index;

	$.each(a, function() {
		
		if (this.name === 'notSelectedCurrencies' || this.name === 'notSelectedPermissions' || this.name === 'notSelectedRoles' 
	    		|| this.name === 'notSelectedClients' || this.name === 'notSelectedCharges') {
			// do not serialize
		} else if (this.name.indexOf('[') !== -1) { //serialize as separate object
			arrayName = this.name.substring(0, this.name.indexOf("["));
			if (o[arrayName] === undefined){
				o[arrayName] = [];				
			}
			index = parseInt(this.name.substring(this.name.indexOf("[") + 1, this.name.indexOf("]")));
			if (index > 0){
				index -= 1;
			}
			if (o[arrayName][index] === undefined){
				o[arrayName][index] = {};
			}
			propertyName = this.name.substring(this.name.lastIndexOf("[") + 1, this.name.lastIndexOf("]"));
			o[arrayName][index][propertyName] = this.value || '';
		} else  {
		    if (o[this.name] !== undefined) {
		        if (!o[this.name].push) {
		            o[this.name] = [o[this.name]];
		        }
		        o[this.name].push(this.value || '');
		    } else {
		    	
		    	if (this.name === 'selectedItems' || this.name === 'notSelectedItems' || this.name === 'currencies' || this.name === 'permissions' 
	        		|| this.name === 'roles' || this.name === 'clientMembers' || this.name === 'charges') {
		    		o[this.name] = new Array();
		    		o[this.name].push(this.value || '');
		    	} else {
		    		o[this.name] = this.value || '';	
		    	}
		    }
		}
	});
	
	//clean serialized arrays - remove nulls 
	$.each(o, function(key, value){
		if (value instanceof Array){
			o[key] = value.filter(function(e){return e}); 
		}
	})

	return o;
};

$.fn.serializeArray = function (options) {
    var o = $.extend({
        checkboxesAsBools: false
    }, options || {});

    var rselectTextarea = /select|textarea/i;
    var rinput = /text|hidden|password|search/i;

    return this.map(function () {
        return this.elements ? $.makeArray(this.elements) : this;
    })
    .filter(function () {
        return this.name && !this.disabled &&
            (this.checked
            || (o.checkboxesAsBools && this.type === 'checkbox')
            || rselectTextarea.test(this.nodeName)
            || rinput.test(this.type));
    })
        .map(function (i, elem) {
            var val = $(this).val();
            return val == null ?
            null :
            $.isArray(val) ?
            $.map(val, function (val, i) {
                return { name: elem.name, value: val };
            }) :
            {
                name: elem.name,
                value: (o.checkboxesAsBools && this.type === 'checkbox') ? 
                    (this.checked ? 'true' : 'false') :
                    val
            };
        }).get();
};

	
function displayListTable(tableDiv) {

	return  $("#" + tableDiv).dataTable( {
					"bSort": true,
					"aaSorting": [], //disable initial sort
					"bInfo": true,
					"bJQueryUI": true,
					"bRetrieve": false,
					"bScrollCollapse": false,
					"bPaginate": false,
					"bLengthChange": false,
					"bFilter": false,
					"bAutoWidth": false,
					"oLanguage": {
								"sEmptyTable": doI18N("rpt.no.entries"),
								"sZeroRecords": doI18N("rpt.no.matching.entries"),
								"sInfo": doI18N("rpt.showing") + " _START_ " + doI18N("rpt.to") + " _END_ " + doI18N("rpt.of") + " _TOTAL_ " + doI18N("rpt.records"),
								"SInfoFiltered": "(" + doI18N("rpt.filtered.from") + " _max_ " + doI18N("rpt.total.entries") + ")",
        							"oPaginate": {
            									"sFirst"    : doI18N("rpt.first"),
            									"sLast"     : doI18N("rpt.last"),
            									"sNext"     : doI18N("rpt.next"),
            									"sPrevious" : doI18N("rpt.previous")
        									},
								"sLengthMenu": doI18N("rpt.show") + " _MENU_ " + doI18N("rpt.entries"),
								"sSearch": doI18N("rpt.search")
					}
				} );
}


//Error functions		
function removeErrors(placeholderDiv) {
		// remove error class from all input fields
		var $inputs = $('#entityform :input');
		
	    $inputs.each(function() {
	        $(this).removeClass("ui-state-error");
	    });
		
	  	$(placeholderDiv).html("");
}
	
function handleXhrError(jqXHR, textStatus, errorThrown, templateSelector, placeholderDiv) {
	  	if (jqXHR.status === 0) {
		    alert('No connection. Verify application is running.');
	  	} else if (jqXHR.status == 401) {
			alert('Unauthorized. [401]');
		} else if (jqXHR.status == 404) {
		    alert('Requested page not found. [404]');
		} else if (jqXHR.status == 405) {
			alert('HTTP verb not supported [405]: ' + errorThrown);
		} else if (jqXHR.status == 500) {
		    alert('Internal Server Error [500].');
		} else if (errorThrown === 'parsererror') {
		    alert('Requested JSON parse failed.');
		} else if (errorThrown === 'timeout') {
		    alert('Time out error.');
		} else if (errorThrown === 'abort') {
		    alert('Ajax request aborted.');
		} else {
			
			removeErrors(placeholderDiv);
			
		  	var jsonErrors = JSON.parse(jqXHR.responseText);
		  	//console.log(jsonErrors);
		  	var valErrors = jsonErrors.errors;
		  	//console.log(valErrors);
		  	var errorArray = new Array();
		  	var arrayIndex = 0;
		  	$.each(valErrors, function() {
		  	  var fieldId = '#' + this.parameterName;
		  	  $(fieldId).addClass("ui-state-error");
		  	  
		  	  var errorObj = new Object();
		  	  errorObj.field = this.parameterName;
		  	  errorObj.code = this.userMessageGlobalisationCode;
		  	  
		  	  var argArray = new Array();
		  	  var argArrayIndex = 0;
		  	  $.each(this.args, function() {
		  		argArray[argArrayIndex] = this.value;
		  		argArrayIndex++;
		  	  });
		  	  // hardcoded support for six arguments
		  	  errorObj.message = doI18N(this.userMessageGlobalisationCode, argArray[0], argArray[1], argArray[2], argArray[3], argArray[4], argArray[5]);
		  	  errorObj.value = this.value;
		  	  
		  	  errorArray[arrayIndex] = errorObj;
		  	  arrayIndex++
		  	});
		  	
		  	var templateArray = new Array();
		  	var templateErrorObj = new Object();
		  	templateErrorObj.title = doI18N('error.msg.header');
		  	templateErrorObj.errors = errorArray;
		  	
		  	templateArray[0] = templateErrorObj;
		  	
		  	var formErrorsHtml = $(templateSelector).render(templateArray);
		  	
		  	$(placeholderDiv).append(formErrorsHtml);
		}
}

// these helpers are registered for the jsViews and jsRender functionality to fix bug with display zero! 
// plus some utility functions are added also for doI18N and currentLocale
function jsViewsRegisterHelpers() {
	$.views.registerHelpers(helperFunctions);
}

	helperFunctions = {
			moneyFormatted: function(currencyObj, bigDecimalValue) {
				
				if (undefined == bigDecimalValue || undefined == currencyObj) {
					return "";
				}
				Globalize.culture().numberFormat.currency.symbol = currencyObj.displaySymbol;
				
				var digits = currencyObj.decimalPlaces.toFixed(0);
				return Globalize.format(bigDecimalValue, "c" + digits); 
			},
			monetaryValue: function(currencyObj, bigDecimalValue) {
				
				if (undefined == bigDecimalValue || undefined == currencyObj) {
					return "";
				}
				Globalize.culture().numberFormat.currency.symbol = currencyObj.displaySymbol;
				
				var digits = currencyObj.decimalPlaces.toFixed(0);
				return Globalize.format(bigDecimalValue, "n" + digits); 
			},
			decimal: function(number, digits) {
		      try {
		    	if (undefined == number || number == null) {
		    		return "";
				}
		    	var parsed = parseFloat(number.toFixed(digits));
		    	var parsedStr = "" + parsed;
		    	var nonZeroDigitsAfterDecimal = 0;
		    	if (parsedStr.indexOf('.') > 0) {
		    		nonZeroDigitsAfterDecimal = (parsedStr.length-1) - parsedStr.indexOf('.');
		    	}
		    	return Globalize.format(parsed, "n" + nonZeroDigitsAfterDecimal); 
		      } catch(e) {
		        return number +"(NaN)";
		      }
		    },
			number: function(number) {
		      try {
		    	  return Globalize.format(number, "n0"); 
		      } catch(e) {
		        return number +"(NaN)";
		      }
		    },
		    numberGreaterThanZero: function(number) {
			      try {
			    	var num = number.toFixed(0);
			        return num > 0;
			      } catch(e) {
			        return false;
			      }
			},
			isAdjustableTransaction: function(transactionTypeId) {
				  try {
		    		if (undefined == transactionTypeId || transactionTypeId === null) {
						return false;
					}
			    		
			    	var num = transactionTypeId.toFixed(0);
			        return num == 2 || num == 4;
			      } catch(e) {
			        return false;
			      }
			},
			globalDate: function(dateParts) {
			      try {
			    	  if (undefined != dateParts)
			    	  {
			    	  	var year = dateParts[0];
			    	  	var month = parseInt(dateParts[1]) - 1; // month is zero indexed
			    	  	var day = dateParts[2];
			    	  
			    	  	var d = new Date();
			    	  	d.setFullYear(year,month,day);
			    	  
			    	  	return Globalize.format(d,"dd MMMM yyyy");
			    	  }
			    	  else return "";
			      } catch(e) {
			        return "??";
			      }
			},
			globalDateAsISOString: function(localDateAsISOString) {
			      try {
			    	  if (undefined != localDateAsISOString)
			    	  {
				    	  var dateParts = localDateAsISOString.split("-")
				    	  var year = dateParts[0];
				    	  var month = dateParts[1] - 1; // month is zero indexed
				    	  var day = dateParts[2];
				    	  
				    	  var d = new Date();
				    	  d.setFullYear(year,month,day);
				    	  return Globalize.format(d,"dd MMMM yyyy");
			    	  } else return "";
			      } catch(e) {
			        return "??";
			      }
			},
			globalDateTime: function(dateInMillis) {
			      try {
			    	  if (undefined != dateInMillis)
			    	  {
				    	  var d = new Date(dateInMillis);
				    	  return Globalize.format(d,"F");
			    	  } else return "";
			      } catch(e) {
			        return "??";
			      }
			},
			currentLocale: function() {
			      try {
			    	  return Globalize.culture().name;
			      } catch(e) {
			        return "??";
			      }
			},
			doI18N: function(xlateStr, params) {
			      try {
			    	  return doI18N(xlateStr, params);
			      } catch(e) {
			        return xlateStr;
			      }
			},
			showIt: function(functionalityName) {
			      try {
			    	  return jQuery.MifosXUI.showIt(functionalityName);
			      } catch(e) {
			        return false;
			      }
			}

	};