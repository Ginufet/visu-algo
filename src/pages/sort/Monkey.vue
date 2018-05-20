<template>
    <div>
        <h2>猴子排序</h2>
        <div id="flip-list-demo" class="demo">
            <!-- <div>{{step}} - {{stepLock}}</div> -->
            <div>{{pointer}}</div>
            <button @click="rush">Sort</button>
            <button @click="next">Next</button>
            <transition-group name="flip-list" tag="ul">
                <li v-for="(item, _) in array" :key="item" :style="{color: _ === pointer.i || _ === pointer.j ? 'red' : 'black'}">
                {{ item }}
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import _ from 'lodash'

function delay(duration) {
    return new Promise(r => setTimeout(r, duration))
}

export default {
    data () {
        return {
            array: [],
            len: 10,
            duration: 300,
            pointer: {i: -1, j: -1},
            step: 0,
            stepLock: 0
        }
    },
    mounted () {
        const s = new Set()
        while (s.size < this.len) {
            s.add(_.random(0, this.len * 10))
        }
        this.array = [...s]
    },
    computed: {
        inOrder () {
            for (let i = 0; i < this.array.length - 1; ++i) {
                if (this.array[i] > this.array[i + 1]) {
                    return false
                }
            }
            return true
        }
    },
    methods: {
        nextStep () {
            return new Promise(resolve => {
                const check = () => {
                    if (this.step < this.stepLock) {
                        this.step += 1
                        resolve()
                    } else {
                        requestAnimationFrame(check)
                    }
                }
                check()
            })
        },
        async sort () {
            while (!this.inOrder) {
                this.array = _.shuffle(this.array)
                await delay(this.duration)
                await this.nextStep()
            }
        },
        next () {
            if (!this.stepLock) {
                this.step += 1
                this.sort()
            }
            this.stepLock += 1
        },
        rush () {
            if (!this.stepLock) {
                this.sort()
            }
            this.stepLock = Infinity
        }
    }
}
</script>

<style>
    .flip-list-move {
        transition: transform .3s;
    }
</style>
