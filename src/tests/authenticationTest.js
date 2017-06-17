describe('AuthService' , function () {

    beforeEach(module('app'));

    var authService,
        androidFingerPrintMock,
        touchIdMock;

    androidFingerPrintMock = jasmine.createSpyObj('authFingerPrint spy',['AndroidFingerprintAuth']);
    touchIdMock = jasmine.createSpyObj('touchId spy',['TouchId']);

    authService = AuthService(androidFingerPrintMock,touchIdMock);

    authService.androidAuth();

    describe('#androidAuth' ,function () {

        describe('when androidAuth Is Called On Non-Android Device',function () {
            it(' code should return 2',function () {
                expect(authServiceMock).toHaveBeenCalledWith('2');
            })
        })
    })
})