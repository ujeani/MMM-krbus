# MMM-krbus

(Under construction)
Korean bus arrival information module for [MagicMirror](https://github.com/MichMich/MagicMirror).
[MagicMirror](https://github.com/MichMich/MagicMirror)를 위한 대한민국 경기 버스 도착 알림 모듈입니다.
버스 도착

## 설치

1. MagicMirror의 `modules` 폴더에서 `git clone https://github.com/ptrbld/MMM-Button.git` 를 실행합니다.


## 모듈 사용법
이 모듈을 사용하기 위해 `config/config.js` 파일의 모듈 배열에 다음을 추가하십시오.

````javascript
modules: [
	{
		module: 'MMM-krbus',
		config: {
			// 아래의 '설정 옵션' 정보에 따라 필요한 설정값을 추가합니다.
		}
	}
]
````

## 설정 옵션

다음의 설정값을 참고하십시오
The following properties can be configured:


<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>옵션</th>
			<th width="100%">설명</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>key</code></td>
			<td><br>버스도착알림 API를 사용하기 위한 key값입니다.이 key값은
				<br><b>Possible values:</b> <code>int</code>
				<br><b>Default value:</b> <code>5</code>
			</td>
		</tr>
		<tr>
			<td><code>clickDelay</code></td>
			<td>The time in miliseconds before another button click is recognized<br>
				<br><b>Possible values:</b> <code>int</code>
				<br><b>Default value:</b> <code>500</code>
			</td>
		</tr>
	</tbody>
</table>
