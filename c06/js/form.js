/**
 * Created by ebad on 28.3.2016.
 */
var elForm, elSelectPackage, elPackageHint, elTerms;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
var elTermsHint = document.getElementById('termsHint');

function packageHint(){
    var package = this.options[this.selectedIndex].value    // Get selected option.
    if (package == 'monthly'){
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
    } else {
        elPackageHint.innerHTML = 'Wise choice!';
    }
}

function checkTerms(event){
    if (!elTerms.checked){
        elTermsHint.innerHTML='You must agree to the terms.';
        event.preventDefault();
    }
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);