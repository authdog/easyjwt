import {pem2jwk} from 'pem-jwk';

it("convert PEM to jwk", () => {
    const t = pem2jwk(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAukqO14W99HkYw2l9bbxx
OoLP1AcwV3D+Fr5Yk8FMNRyARJ2Gikd1/2OXaD7gDrHkIAvGQmhOvGOuODl19wi5
ccHVVxa7lYLeV4Dysjph2QvxgK2vQSMbb1Kbi6wjzDIf/lRpSMELFykLT+56kti4
FFX5YbGTSRnN6Knennsp7g5++LwvTrEK9BgTzzFgNflHbmJTaBy0pdtoXK84mgKG
Yao2rweaNQATDAIfwcbk4blMuAcKBvAl0kp5J/5IOvDQyOMiHpRDVSWOaaEQ2QsT
eafelNgLuLb7Rlo8jijsRr0QQA25othOTFEhzXhfZXnL4XDF3g5pH4j5zm83SNFh
twIDAQAB
-----END PUBLIC KEY-----`)

    expect(t?.kty).toBeTruthy();
    expect(t?.n).toBeTruthy();
    expect(t?.e).toBeTruthy();
});

it("converts jwk to PEM", () => {
    
}) 
