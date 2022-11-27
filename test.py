import hashlib
import yaml


# Read YAML file
with open("data.yaml", 'r') as stream:
    data = yaml.safe_load(stream)

for enigma in data['enigmas']:
    print(enigma)
    m = hashlib.sha256()
    m.update(enigma['answer'].encode('utf8'))
    m.digest()
    print(m.hexdigest())