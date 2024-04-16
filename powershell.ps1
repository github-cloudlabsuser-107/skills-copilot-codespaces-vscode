# Define parameters
$resourceGroupName = "<ResourceGroupName>"
$deploymentName = "<DeploymentName>"
$templateFilePath = "<PathToYourTemplateFile>"
$storageAccountName = "<StorageAccountName>"
$location = "<Location>"

# Create a resource group if it doesn't exist
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Define template parameters
$templateParameters = @{
    "storageAccountName" = $storageAccountName
}

# Deploy the ARM template
New-AzResourceGroupDeployment -Name $deploymentName -ResourceGroupName $resourceGroupName -TemplateFile $templateFilePath -TemplateParameterObject $templateParameters