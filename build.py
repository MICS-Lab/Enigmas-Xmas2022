import hashlib
import yaml


# Read YAML file
with open("data.yaml", 'r') as stream:
    data = yaml.safe_load(stream)


################################ index.html ################################

with open("parts/index_top.html", 'r') as f:
    top = f.read()
with open("parts/index_bottom.html", 'r') as f:
    bottom = f.read()

middle = ""
for i, enigma in enumerate(data['enigmas']):
    middle += f"""
        <div class="enigma" id="enigma{i}">
            <h4>Enigma {i+1}</h4>
            <div class="input">
                <label for="password{i}">Answer:</label>
                <input type="password{i}" id="password{i}" name="password{i}" />
                <button type="button" onclick="checkPassword{i}()">Submit</button>
            </div>
            <div class="status">
                <img src="checked.svg" class="finished" id="enigma{i}-check">
                <img src="not_checked.svg" class="not-finished" id="enigma{i}-no-check">
            </div>
        </div>
    """

full = top + middle + bottom
with open("index.html", 'w') as f:
    f.write(full)


################################ script.js ################################

script = ""
for i, enigma in enumerate(data['enigmas']):
    m = hashlib.sha256()
    m.update(str(enigma['answer']).encode('utf8'))
    m.digest()
    script += f"""
function checkPassword{i}() {{
  var password = document.getElementById("password{i}").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "{m.hexdigest()}"
  ) {{
    document.getElementById("enigma{i}-check").style = "display: block";
    document.getElementById("enigma{i}-no-check").style = "display: none";
  }} else {{
    document.getElementById("enigma{i}-no-check").style = "display: block";
    document.getElementById("enigma{i}-check").style = "display: none";
    document.getElementById("password{i}").value = "";
  }}
}}

checkPassword{i}();

"""

with open("script.js", 'w') as f:
    f.write(script)
