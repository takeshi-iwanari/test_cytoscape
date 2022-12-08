# Copyright 2022 Tier IV, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""
Script to render page
"""
import flask

app = flask.Flask(__name__)


def render_page():
    """Render html page"""
    destination_path = 'output.html'
    template_path = 'template.html'

    with app.app_context():
        with open(template_path, 'r', encoding='utf-8') as f_html:
            template_string = f_html.read()
            rendered = flask.render_template_string(
                template_string,
                title='Dummy Title',
                var_1='abc',
                var_2='def',
                var_3=[10, 20, 30],
                var_4={ 'param_1': 100, 'param_2': 200, 'param_3': 300 },
                node_result={
                    'sensing': {
                        'num_total': 20,
                        'num_passed': 20,
                        'html': 'sensing.html'
                    },
                    'localization': {
                        'num_total': 20,
                        'num_passed': 5,
                        'html': 'localization.html'
                    },
                },
                edge_result={
                    'sensing2localization': {
                        'num_total': 20,
                        'num_passed': 20,
                        'html': 'sensing2localization.html'
                    },
                    'ext2sensing': {
                        'num_total': 20,
                        'num_passed': 5,
                        'html': 'ext2sensing.html'
                    },
                }
            )

        with open(destination_path, 'w', encoding='utf-8') as f_html:
            f_html.write(rendered)


def main():
    """main function"""
    render_page()


if __name__ == '__main__':
    main()
