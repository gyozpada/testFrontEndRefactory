## Keterangan Debugging

1. mengubah '==' menjadi '=' utils.js : line 17
2. create .env untuk membuat local clientID
3. merubah parameter return yang semula this.onGetAccessToken(data) menjadi this.onGetAccessToken(data.code) karena jika tanpa .code data yang terambil menjadi code{code} GithubLogin.js : line 60
4. add clientSecret pada App.js : line 14
5. merubah parameter access_token di axios dalam onGetAccessToken(code) menjadi response & response.access GithubLogin.js : line 81 dan 83
6. pada onGetProfile returnnya adalah this.props.onSuccess(response.name) karena yang dicari adalah namanya GithubLogin.js : line 96
