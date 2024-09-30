
// import * as ClassicEditor from 'src/assets/js/ckeditorV31/ckeditor.js';

export class AppConst {
    static readonly authorization = {
        encrptedAuthTokenName: 'enc_auth_token',
        authToken: 'AuthToken'
    }

    static readonly listStatus = {
        list: [
            {
                id: 'ACTIVE',
                name: 'Hoạt động'
            },
            {
                id: 'BLOCK',
                name: 'Khóa'
            }
        ],
        transformText: {
            'BLOCK': 'Khóa',
            'ACTIVE': 'Hoạt động'
        }
    }

    static readonly messageToastr = {
        success: {
            insert: 'Thêm thành công!',
            update: 'Cập nhật thành công!',
            delete: 'Xóa thành công!'
        },
        error: {
            insert: 'Thêm thất bại!',
            update: 'Cập nhật thất bại!',
            delete: 'Xóa thất bại!'
        }
    }

    static readonly keySetting = {
        TENANT_INFO: 'TENANT_INFO'
    }

    // static readonly editor = ClassicEditor;
    static readonly placehoderImage = 'https://placehold.co/300x200';
}
