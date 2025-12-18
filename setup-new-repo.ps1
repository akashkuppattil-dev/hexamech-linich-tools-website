# PowerShell script to add new repository and push code
# Usage: .\setup-new-repo.ps1 -RepoUrl "https://github.com/username/repo-name.git"

param(
    [Parameter(Mandatory=$true)]
    [string]$RepoUrl
)

Write-Host "Setting up new repository..." -ForegroundColor Green
Write-Host "Repository URL: $RepoUrl" -ForegroundColor Cyan

# Add new remote
Write-Host "`nAdding new remote as 'new-origin'..." -ForegroundColor Yellow
git remote add new-origin $RepoUrl

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Remote added successfully" -ForegroundColor Green
    
    # Push to new repository
    Write-Host "`nPushing code to new repository..." -ForegroundColor Yellow
    git push new-origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Code pushed successfully!" -ForegroundColor Green
        Write-Host "`nRepository is now available at: $RepoUrl" -ForegroundColor Cyan
        
        # Ask if user wants to make this the default remote
        $response = Read-Host "`nDo you want to make this the default remote? (y/n)"
        if ($response -eq "y" -or $response -eq "Y") {
            git remote set-url origin $RepoUrl
            git remote remove new-origin
            Write-Host "✓ New repository is now the default remote" -ForegroundColor Green
        } else {
            Write-Host "`nTo push to new repo in future, use: git push new-origin main" -ForegroundColor Yellow
        }
    } else {
        Write-Host "✗ Failed to push code. Please check the repository URL and permissions." -ForegroundColor Red
    }
} else {
    Write-Host "✗ Failed to add remote. The repository might already exist or URL is incorrect." -ForegroundColor Red
}




