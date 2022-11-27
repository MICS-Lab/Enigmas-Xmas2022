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
for enigma in data['enigmas']:
    middle += f"""
        <div class="enigma" id="enigma{enigma['id']}">
            <h4>{enigma['name']}</h4>
            <div class="input">
                <label for="password{enigma['id']}">Answer:</label>
                <input type="password{enigma['id']}" id="password{enigma['id']}" name="password{enigma['id']}" />
                <button type="button" onclick="checkPassword{enigma['id']}()">Submit</button>
            </div>
            <div class="status">
                <img src="checked.svg" class="finished" id="enigma{enigma['id']}-check">
                <img src="not_checked.svg" class="not-finished" id="enigma{enigma['id']}-no-check">
            </div>
        </div>
    """

full = top + middle + bottom
with open("index.html", 'w') as f:
    f.write(full)


################################ script.js ################################

script = ""
for enigma in data['enigmas']:
    m = hashlib.sha256()
    m.update(str(enigma['answer']).encode('utf8'))
    m.digest()
    script += f"""
function checkPassword{enigma['id']}() {{
  var password = document.getElementById("password{enigma['id']}").value;
  var sha_password = SHA256(password.toLowerCase().replace(/ /g, '').replace("'", ''));
  if (
    sha_password ==
    "{m.hexdigest()}"
  ) {{
    document.getElementById("enigma{enigma['id']}-check").style = "display: block";
    document.getElementById("enigma{enigma['id']}-no-check").style = "display: none";
  }} else {{
    document.getElementById("enigma{enigma['id']}-no-check").style = "display: block";
    document.getElementById("enigma{enigma['id']}-check").style = "display: none";
    document.getElementById("password{enigma['id']}").value = "";
  }}
}}

checkPassword{enigma['id']}();

"""

with open("script.js", 'w') as f:
    f.write(script)
