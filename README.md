<<<<<<< Updated upstream
# Starbucks
=======
# Github 기본 셋팅 및 환경 설정
## git 설치
```plaintext
https://git-scm.com
```
- 접속후 화면 우축 download windows 클릭 후 다운로드 진행 설치

## cmd 창이나 vscode terminal 실행 후 
```bash
$ git --version
```
- 정상적으로 버전이 출력된다면 성공

## 개행문자(New Line) 설정
```bash
[window]
$ git config --global core.autocrlf true
[mac]
$ git config --global core.autocrlf input
```
## 개행문자(New Line) 설정
```bash
[window]
$ git config --global core.autocrlf true
[mac]
$ git config --global core.autocrlf input
```
## 사용자 정보
### 커밋(버전생성)을 위한 정보등록
```bash
$ git --global user.name  [your_name]
$ git --global user.email [your_email]
```
- your_name : 되도록 github 가입시 등록한 이름 입력
- your_email : github 가입시(ID) 등록한 메일주소 입력

### 사용자 정보 등록 확인
```bash
$ git config --global --list
```
- user.name, user.email 확인

<br />

---
# Github Upload
## 초기화
```bash
$ git init
```
## 상태확인
```bash
$ git status
```
## 수정된 파일 등 추적
```bash
$ git add .
```
## 버전 관리
```bash
$ git commit -m "First Project
```
<br />

---
# Git repository 생성후
## 원격 저장소 연결
```bash
$ git remote add origin 원격 저장소 repogitory 주소
```
## 저장소로 push
```bash
$ git push origin [brach name]
```

<br />

---
# 다른 환경에서의<br />Github 접속 실패와 에러처리

## Remote origin already exists 에러
1. 기존 연결된 원격 저장소 연결 해제
```bash
$ git remote remove origin
```
2. 새롭게 연결할 깃 주소 연결
```bash
$ git remote add origin [새롭게 연결할 깃 레파지토리 주소]
```
3. 로컬 저장소를 원격 저장소에 연결
```bash
$ git remote -v
```
<br />

# 프롤젝트 내에 다른 branch 생성
## 현재 브랜치 확인
```bash
$ git branch
```
## 원격 저장소 브랜치 확인
```bash
$ git branch -a
```

## 현재 브랜치에 새로운 브런치 생성
```bash
$ git branch [branch name]
```

## 생성된 브랜치로 접속
```bash
$ git checkout [branch name]
```
- vscode 좌측 하단에 접속한 브랜치 명 확인
- 폴더를 생성하고 파일을 저장 후
- 기본 명령을 통하여 통신과 버전생성을 해줌

## 마스터 브랜치로 접속
```bash
$ git checkout master
```
- 생성한 브랜치의 내용은 확인되지 않음
- master 브랜치에는 어떠한 영향을 미치지 않음
- 생성한 브랜치의 `개발이 완성되면 추후 master branch에 병합(merge)`하면 됨
- 생성한 브랜치로 변경 후 github로 push

## 깃허브 접속 후 생성한 브랜치 확인

1. code 탭에서 `master barach`명 클릭 후 생성한 브랜치 확인
1. 상단 메뉴 중 `pull requests` 메뉴로 이동
1. 오른쪽 메뉴 중 `New Pull Requests` 클릭
1. `Compare Changes`페이지로 이동된 것을 확인
1. `compare master`에는 생성한 브랜치명에서(수정된 브랜치)
1. `base master`에는 기존 master 브랜치(합처질 브랜치)
1. 설명란에 `Able to merge`확인하고 `Create pull request` 클릭
1. `Pull request` 메뉴에 숫자 표시 된것을 확인 후 최종적으로 하단의 <br />`Merge pull request` 버튼을 클릭
1. `Confirm merge` 클릭 병합 완료

# git the requested URL returend error : 403 해결방법
## 인증하기
```bash
$ git remote set-url origin https://github-username@github.com/github-username/github-repository-name.git
```

- 여기에서 `github-username`에는 본인이 github에서 사용하는 username 을 입력하고 `github-repository-name`에는 git reposit 이름을 입력.    

- 제일 처음에 `git remote add origin git_reposit_주소.git` 을 통해 origin 명칭을 만들었지만 해당 주소에 대한 `권한이 없어서 푸쉬를 할 때 에러`가 난것임.

## 소스코드 푸쉬하기
```bash
$ git push -u origin master
```
- 깃헙 패스워드 입력을 하라는 창이 나오고 입력을 하면 본인의 깃주소에 소스코드가 올라 감.
- 인증이 끝난 후부터는 git push만 하면 기존의 세팅한 주소로 바로 푸쉬, 변경을 원하면 `git remote "set-url" "any_name" "git_reposit_주소"`를 사용

# failed to push some refs to...에러 해결방법
## 원격 저장소와 로컬 저장소의 현재 상태가 달라져<br />Push되지 않음
```bash
$ git pull 
```
- 브랜치 merge하면서 commit 메시지도 자동으로 만들어 짐.
- 성공하면 다시 push하면 정상적으로 실행됨.

```bash
# 현재 Staging 영역에 있는 파일의 변경사항을 스택에 저장
$ git stash
# 아래 명령어와 같이 원격 저장소의 master에서 pull을 하거나, git checkout master와 같이 브랜치를 바꿀 있음
$ git pull origin master
# stash 명령어로 스택에 넣어둔 변경 사항을 적용하고, 스택에서 제거하여준다.
$ git stash pop
```
